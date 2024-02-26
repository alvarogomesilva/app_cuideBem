import Locale from './util'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../../api';
import Colors from '../../../constants/colors';
import { Calendar } from 'react-native-calendars';
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";
import Events from '../../../components/Events';

const MemoizedEvents = memo(Events);

export default function EventsPatientGuardian({ route }) {
  const { params: { patient } } = route;
  const { id: patient_id } = patient;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventsFiltered, setEventsFiltered] = useState([]);
  const [daySelected, setDaySelected] = useState(format(new Date(), 'yyyy-MM-dd'));
  
  const loadEvents = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(`/events/${patient_id}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
    } finally {
      setLoading(false);
    }
  }, [patient_id]);

  const handleEventDeletion = useCallback(async () => {
    await loadEvents();
  }, [loadEvents]);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', handleEventDeletion);
    return unsubscribe;
  }, [navigation, handleEventDeletion]);

  useEffect(() => {
    function filterEvents() {
      const filteredEvents = events.filter(event => format(new Date(event.date), 'yyyy-MM-dd') === daySelected);
      setEventsFiltered(filteredEvents);
    }
    filterEvents();
  }, [daySelected, events]);

  const [selected, setSelected] = useState(new Date());

  const marked = useMemo(() => ({
    [selected]: {
      selected: true,
      selectedColor: Colors.denary,
      selectedTextColor: 'white',
    }
  }), [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <LinearGradient
          colors={['#5E7B99', '#C4E1FF']}
          style={styles.gradient}>
          <SafeAreaView>
            <Calendar
              markedDates={marked}
              onDayPress={(day) => { setSelected(day.dateString); setDaySelected(day.dateString) }}
              style={{
                borderRadius: 5,
                margin: 15
              }}
              theme={{
                calendarBackground: 'transparent',
                dayTextColor: '#fff',
                textDisabledColor: '#444',
                monthTextColor: Colors.white,
                
              }}
            />
          </SafeAreaView>
        </LinearGradient>
      </View>
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.denary} />
        ) : eventsFiltered.length === 0 ? (
          <Text style={styles.noEventsText}>Não há eventos para este dia.</Text>
        ) : (
          <FlatList 
            data={eventsFiltered}
            renderItem={({item}) => <MemoizedEvents item={item} onLoad={loadEvents} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  )
}
