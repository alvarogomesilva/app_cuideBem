import LocaleConfig from './util'
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ButtonBottom from '../../../components/ButtonBottom';
import { styles } from './styles';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import dateFns from 'date-fns';

const classes = [
  {
    startTime: '09:00',
    endTime: '10:30',
    title: 'History of Physics',
    bgColor: '#E0FFFF',

  },
  {
    startTime: '10:30',
    endTime: '11:00',
    title: 'History of Physics',
    bgColor: '#E6E6FA',

  }
];

const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>Horário</Text>
          <Text style={styles.endTime}>{item.endTime}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.bgColor }]}>
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDate}>24 March, 18pm - 19pm</Text>
          </View>
        </View>
      </View>
    </View>
  );

export default function DiaryPatientGuardian({ route }) {
    
    const navigation = useNavigation()
    const baseDate = new Date(2019, 6, 15)
    return (
        <View style={styles.container}>
            <Calendar
                style={styles.calendar}
                markedDates={{
                    '2024-01-16': {selected: true, marked: true, selectedColor: 'blue'},
                    '2024-01-17': {marked: true},
                    '2024-01-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2024-01-19': {disabled: true, disableTouchEvent: true}
                  }}

                  theme={{
                    selectedDayBackgroundColor: '#FF00FF'
                  }}
            />
                <FlatList
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                    data={classes}
                
                    renderItem={renderClassItem}
                    keyExtractor={(item, index) => index.toString()}
                />
        
            <ButtonBottom onPress={() => navigation.navigate('NewDiaryPatientGuardian', {
              patient: route.params.patient
            })} />
        </View>
    );
}
