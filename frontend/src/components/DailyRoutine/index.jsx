import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { compareAsc, differenceInMinutes, format, parse } from 'date-fns';
import AwesomeAlert from 'react-native-awesome-alerts';
import api from '../../api' 
import {styles} from './styles'

const DailyRoutine = ({ data, patient, onUpdate }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showCancelButton, setShowCancelButton] = useState(false)
  const [showConfirmButton, setShowConfirmButton] = useState(false)
  const [cancelText, setCancelText] = useState('')
  const [confirmText, setConfirmText] = useState('')
  const [selectedDaily, setSelectedDaily] = useState(null); 

  const showAlert = (message, daily) => {
    setAlertVisible(true);
    setSelectedDaily(daily); 
    if (message === 'Já passou da hora!') {
      setAlertMessage(message);
      setShowCancelButton(false)
      setShowConfirmButton(false)
      setTimeout(() => {
        setAlertVisible(false);
      }, 1700);
    } else if (message === 'Ainda não chegou a hora') {
      setAlertMessage(message)
      setShowConfirmButton(false)
      setTimeout(() => {
        setAlertVisible(false);
      }, 1700);
    } else {
      setAlertMessage(message)
      setShowConfirmButton(true)
      setShowCancelButton(true)
      setCancelText('Cancelar')
      setConfirmText('Sim, concluir')
    }
  };

  const hideAlert = () => setAlertVisible(false);

  const handleDone = async () => {
    try {
      const dones = await api.put(`/dailys/${selectedDaily.id}`)
      onUpdate()
      setTimeout(() => {
        hideAlert()
      }, 1000);
    } catch (error) {
      console.log(error)
    } 
  };

  const handleCheckboxChange = async (daily) => {
    const dailyHour = daily.hour;
    const hourNow = new Date();

    const comparacao = compareAsc(dailyHour, hourNow);
    const diferencaEmMinutos = differenceInMinutes(hourNow, dailyHour);

    if (comparacao === -1 && diferencaEmMinutos > 15) {
      showAlert('Já passou da hora!', daily);
    } else if (comparacao === 1) {
      showAlert('Ainda não chegou a hora', daily);
    } else {
      showAlert('Marcar como concluída?', daily);
    }
  };

  const Header = () => {
    return (
      <View style={styles.cardPatient}>
        <View style={styles.body}>
          <Image source={{ uri: `http://192.168.0.100:3000/files/${patient.photo}` }} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{patient.name}</Text>
            <Text style={styles.userRole}>{patient.birth}</Text>
          </View>
        </View>
      </View>
    );
  };

  const NoRoutineMessage = () => {
    if (data.length === 0) {
      return (
        <Text style={styles.noDaily}>Não há rotina disponível.</Text>
      );
    }
    return null;
  };

  const DailyItem = ({ item }) => {
    const backgroundColor = item.done ? '#69f0ae' : '#ffcdd2';
    return (
      <TouchableOpacity 
        style={[styles.classItem]} 
        onPress={() => handleCheckboxChange(item)}
      >
        <View style={styles.timelineContainer}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineLine} />
        </View>
        <View style={styles.classContent}>
          <View style={styles.classHours}>
            <Text style={styles.startTime}>{format(item.hour, 'HH:mm')}</Text>
            <Text style={styles.endTime}>{item.endTime}</Text>
          </View>
          <View style={[styles.card, { backgroundColor }]}>
            <View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDate}>{item.description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={data}
        ListHeaderComponent={Header}
        renderItem={({ item }) => <DailyItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <NoRoutineMessage />
      <AwesomeAlert
        show={alertVisible}
        showProgress={false}
        title={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={showCancelButton}
        showConfirmButton={showConfirmButton}
        cancelText={cancelText}
        confirmText={confirmText}
        onCancelPressed={hideAlert}
        onConfirmPressed={handleDone}
      />
    </View>
  );
};

export default DailyRoutine;
