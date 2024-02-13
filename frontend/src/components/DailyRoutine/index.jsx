import React, { useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { addMinutes, compareAsc, differenceInMinutes, format, parse } from 'date-fns';
import api from '../../api'
import { styles } from './styles'
import AwesomeAlert from 'react-native-awesome-alerts';

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
        </View>
        <View style={styles.classContent}>
          <View style={styles.classHours}>
            <Text style={styles.startTime}>{format(item.hour, 'HH:mm')}</Text>
            <Text style={styles.endTime}>{format(addMinutes(item.hour, 15), 'HH:mm')}</Text>
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
        renderItem={({ item }) => <DailyItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <NoRoutineMessage />

      <AwesomeAlert
        show={alertVisible}
        showProgress={false}
        title="Confirmação"
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={showCancelButton}
        showConfirmButton={showConfirmButton}
        cancelText={cancelText}
        confirmText={confirmText}
        confirmButtonColor="#DD6B55"
        onCancelPressed={hideAlert}
        onConfirmPressed={handleDone}
      />

    </View>
  );
};

export default DailyRoutine;
