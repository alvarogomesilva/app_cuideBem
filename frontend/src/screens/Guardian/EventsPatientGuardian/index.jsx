import LocaleConfig from './util'
import React, { memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { styles } from './styles';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../../api';
import { white } from '../../../constants/colors';
import Events from '../../../components/Events';

const MemoizedEvents = memo(Events);

function sortByHourAscending(events) {
  return events.slice().sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a.hour}`);
    const timeB = new Date(`1970-01-01T${b.hour}`);
    return timeA - timeB;
  });
}

export default function EventsPatientGuardian({ route }) {
  const { params: { patient } } = route;
  const { id: patient_id } = patient;

  const [events, setEvents] = useState([]);
  const [eventsFiltered, setEventsFiltered] = useState([]);
  const [daySelected, setDaySelected] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loadEvents = useCallback(async () => {
    try {
      const response = await api.get(`/events/${patient_id}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
    } finally {
      setLoading(false);
    }
  }, [patient_id]);

  const handleEventDeletion = async () => {
    await loadEvents();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', handleEventDeletion);
    return unsubscribe;
  }, [navigation, handleEventDeletion]);

  useEffect(() => {
    function filterEvents() {
      const sortedEvents = sortByHourAscending(events);
      const newEvents = sortedEvents.filter(e => e.date === daySelected);
      setEventsFiltered(newEvents);
    }
    filterEvents();
  }, [daySelected, events]);

  const markedDates = events.reduce((result, event) => {
    const formattedDate = event.date;

    result[formattedDate] = result[formattedDate] || {
      marked: true,
      dots: [],
    };

    result[formattedDate].dots.push({ key: event.id, color: event.color });

    return result;
  }, {});

  const calendarTheme = {
    dayBackgroundColor: '#FF00FF', 
    selectedDayBackgroundColor: '#00adf5',
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayTextColor: '#FF00FF',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'blue',
    indicatorColor: 'blue',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        markingType='multi-dot'
        onDayPress={day => setDaySelected(day.dateString)}
        theme={calendarTheme}
      />

      {loading ? (
        <ActivityIndicator color={white} size="large" />
      ) : (
        eventsFiltered.length > 0 ? (
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            data={eventsFiltered}
            renderItem={({ item }) => <MemoizedEvents item={item} onDelete={handleEventDeletion} />}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={styles.noEvent}>Não tem eventos Hoje!</Text>
        )
      )}

      <ButtonBottom onPress={() => navigation.navigate('NewEventPatientGuardian', { patient })} />
    </View>
  );
}
