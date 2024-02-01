import LocaleConfig from './util'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { styles } from './styles';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import dateFns from 'date-fns';
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
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default function DiaryPatientGuardian({ route }) {
  const [patient_id, setPatient_id] = useState(route.params.patient.id)
  const [events, setEvents] = useState([])
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

  const markedDates = {};

  events.forEach((event) => {
    const formattedDate = event.date; 

    if (markedDates[formattedDate]) {
      markedDates[formattedDate].dots.push({ key: event.id, color: event.color });
    } else {
      markedDates[formattedDate] = {
        marked: true,
        dots: [{ key: event.id, color: event.color }],
      };
    }
  });
  

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#FF00FF'
        }}
      />
      {loading ? (
        <ActivityIndicator color={white} size="large" />
      ) : (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 16 }}
          data={events}

          renderItem={renderClassItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <ButtonBottom onPress={() => navigation.navigate('NewDiaryPatientGuardian', {
        patient: route.params.patient
      })} />
    </View>
  );
}
