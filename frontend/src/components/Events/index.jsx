import { format } from "date-fns";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import api from '../../api';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useState } from "react";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import * as Notifications from 'expo-notifications';

const Events = ({ item, onLoad }) => {
  const [alertVisible, setAlertVisible] = useState(false);


  const deleteEvent = async () => {
    try {
      await api.delete(`/events/${item.id}`);
      await Notifications.cancelScheduledNotificationAsync(item.notification)
      onLoad()
    } catch (error) {
      console.log(error);
    }
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Mensagem',
      textBody: 'Excluida com sucesso!',
      autoClose: 2000,
    });
  };

  const handleEvent = () => {
    setAlertVisible(true)

  };

  const hideAlert = () => setAlertVisible(false);


  return (
    <TouchableOpacity style={styles.classItem} onLongPress={handleEvent} activeOpacity={0.8}>
      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>Horário</Text>
          <Text style={styles.endTime}>{format(item.hour, 'HH:mm')}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.color }]}>
          <View>
            <Text style={styles.cardTitle}>{item.description}</Text>
            <Text style={styles.cardDate}>{format(item.date, 'dd/MM/yyyy')}</Text>
          </View>
        </View>
      </View>

      <AwesomeAlert
        show={alertVisible}
        showProgress={false}
        title="Deseja realmente excluir?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText='Não, cancelar'
        confirmText='Sim, excluir'
        confirmButtonColor="#DD6B55"
        onCancelPressed={hideAlert}
        onConfirmPressed={deleteEvent}
      />
    </TouchableOpacity>
  );
};

export default Events;
