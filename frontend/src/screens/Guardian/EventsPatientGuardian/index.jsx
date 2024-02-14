import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../../api';
import Colors, { white } from '../../../constants/colors';
import Events from '../../../components/Events';
import { Agenda, Calendar } from 'react-native-calendars';
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";

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
  const [eventsFiltered, setEventsFiltered] = useState({});
  const [daySelected, setDaySelected] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const loadEvents = useCallback(async () => {
    try {
      const response = await api.get(`/events/${patient_id}`);
      console.log(response.data);
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
      const eventsObj = newEvents.reduce((acc, event) => {
        acc[event.date] = acc[event.date] || [];
        acc[event.date].push(event);
        return acc;
      }, {});
      setEventsFiltered(eventsObj);
    }
    filterEvents();
  }, [daySelected, events]);

  const [selected, setSelected] = useState(new Date());
  // const marked = useMemo(() => ({
  //   [selected]: {
  //     selected: true,
  //     selectedColor: 'blue',
  //     selectedTextColor: 'white',
  //   }
  // }), [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <LinearGradient
          colors={['#5E7B99', '#C4E1FF']}
          style={styles.gradient}>

          <SafeAreaView>
            <Calendar

              markedDates={eventsFiltered}
              onDayPress={(day) => { setSelected(day.dateString) }}
              style={{
                borderRadius: 5,
                margin: 15
              }}
              theme={{
                calendarBackground: 'transparent',
                dayTextColor: '#fff',
                textDisabledColor: '#444',
                monthTextColor: Colors.white
              }}
            />
          </SafeAreaView>


        </LinearGradient>
      </View>



    </View>
  )
}

// <ButtonBottom onPress={() => navigation.navigate('NewEventPatientGuardian', { patient })} />
