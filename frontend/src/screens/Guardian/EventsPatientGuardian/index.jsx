import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../../api';
import Colors, { white } from '../../../constants/colors';
import Events from '../../../components/Events';
import { Agenda } from 'react-native-calendars';
import { styles } from './styles';
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
      const eventsObj = newEvents.reduce((acc, event) => {
        acc[event.date] = acc[event.date] || [];
        acc[event.date].push(event);
        return acc;
      }, {});
      setEventsFiltered(eventsObj);
    }
    filterEvents();
  }, [daySelected, events]);

  const markedDates = useMemo(() => {
    const marked = {};
    events.forEach(event => {
      const formattedDate = event.date;
      marked[formattedDate] = marked[formattedDate] || { dots: [] };
      marked[formattedDate].dots.push({ key: event.id, color: event.color });
    });
    return marked;
  }, [events]);

  return (
    <View style={styles.container}>
      <Text>16 June 2024</Text>
      <Text>Agenda</Text>
      <Agenda
        items={eventsFiltered}
        renderItem={(item) => <MemoizedEvents item={item} onDelete={handleEventDeletion} />}
        renderEmptyData={() => {
          return (
            <View>
              <Text>Não tem eventos</Text>
            </View>
          )
        }}
        rowHasChanged={(r1, r2) => r1.name !== r2.name}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{ backgroundColor: '#ff00ff' }}
        scrollEnabled 
      />
    
      <ButtonBottom onPress={() => navigation.navigate('NewEventPatientGuardian', { patient })} />
    </View>
  )
}
