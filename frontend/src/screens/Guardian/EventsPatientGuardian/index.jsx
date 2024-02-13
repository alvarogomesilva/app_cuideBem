import LocaleConfig from './util'
import React, { memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { styles } from './styles';
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
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  return (
    <View style={styles.container}>


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
  )
}


