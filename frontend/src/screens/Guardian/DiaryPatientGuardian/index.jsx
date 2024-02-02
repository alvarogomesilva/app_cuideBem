import LocaleConfig from './util'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { styles } from './styles';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import dateFns, { format } from 'date-fns';
import api from '../../../api'
import { white } from '../../../constants/colors';

const renderClassItem = ({ item }) => (
  <View style={styles.classItem}>
    <View style={styles.timelineContainer}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>

    <View style={styles.classContent}>
      <View style={styles.classHours}>
        <Text style={styles.startTime}>Horário</Text>
        <Text style={styles.endTime}>{item.hour}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: item.color }]}>
        <View>
          <Text style={styles.cardTitle}>{item.description}</Text>
          <Text style={styles.cardDate}>{format(item.date, 'MM/dd/yyyy')}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default function DiaryPatientGuardian({ route }) {
  const [patient_id, setPatient_id] = useState(route.params.patient.id)
  const [events, setEvents] = useState([])
  const [eventsFiltered, setEventsFiltered] = useState([])
  const [daySelected, setDaySelected] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    async function loadEvents() {
      setLoading(true)
      try {
        const events = await api.get(`/events/${patient_id}`)
        setEvents(events.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    loadEvents()
  }, [])

  useEffect(() => {
    function filterEvents() {
      const newEvents = events.filter(e => e.date === daySelected)
      setEventsFiltered(newEvents)
    }
    filterEvents()
  }, [daySelected])


  const markedDates = {};
  if (events.length > 0) {
    events.forEach((event) => {
      const formattedDate = event.date;

      if (markedDates[formattedDate]) {
        markedDates[formattedDate].dots.push({ key: event.id, color: event.color });
      } else {
        markedDates[formattedDate] = {
          marked: true,
          dots: [{ 
              key: event.id, 
              color: event.color, 
               
            }],
        };
      }
    });
  }

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        markingType='multi-dot'
        onDayPress={day => setDaySelected(day.dateString)}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
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
        }}

      />

      {loading ? (
        <ActivityIndicator color={white} size="large" />
      ) : (

        (
          eventsFiltered.length > 0 ? (
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 16 }}
              data={eventsFiltered}
              renderItem={renderClassItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <Text>Não tem eventos nesse dia!</Text>
          )
        )
      )}

      <ButtonBottom onPress={() => navigation.navigate('NewDiaryPatientGuardian', {
        patient: route.params.patient
      })} />
    </View>
  );
}
