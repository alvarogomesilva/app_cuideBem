import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, ScrollView, Switch } from 'react-native';
import { styles } from './styles';
import { useNewEvent } from '../../../hooks/useNewEvent';
import Colors, { white } from '../../../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Checkbox from 'expo-checkbox';
import { SelectList } from 'react-native-dropdown-select-list';
import { usePatients } from '../../../hooks/usePatients';
import { compareAsc, format } from 'date-fns';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}

const hourMask = [/\d/, /\d/, ":", [/\d/], [/\d/]];

const colors = [
  { id: 0, label: 'Azul', color: "#81d4fa" },
  { id: 1, label: 'Verde', color: "#b2dfdb" },
  { id: 2, label: 'Roxo', color: "#d1c4e9" },
  { id: 3, label: 'Vermelho', color: "#ffcdd2" },
  { id: 4, label: 'Amarelo', color: "#f4ff81" },
];

export default function NewEventPatientCaregiver({ route }) {
  const { newEvent, loading } = useNewEvent();
  const patient_id = route.params?.patient.id;
  const { listPatients } = usePatients()
  const [selectedCheckbox, setSelectedCheckbox] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [inputs, setInputs] = useState({
    patient_id,
    description: "",
    date: new Date(),
    hour: new Date(),
    color: "#81d4fa",
    dateNotification: new Date(),
    notification: null
  });

  async function schedulePushNotification(dateTime, message) {
    try {
      const trigger = new Date(dateTime);
      const idNotification = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Mensagem!',
          body: message,
          sound: ''
        },
        trigger,
      });
      return idNotification;
    } catch (error) {
      console.error("Erro ao agendar notificação:", error);
      return null;
    }
  }



  const handleEvent = async () => {
    if (inputs.patient_id === undefined) {
      return Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Mensagem',
        textBody: 'Selecione um paciente!',
        autoClose: 2000,
      });
    }

    if (inputs.description.trim() === '') {
      return Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Mensagem',
        textBody: 'Descreva o evento!',
        autoClose: 2000,
      });
    }

    if (isEnabled) {
      if (compareAsc(inputs.dateNotification, inputs.date) !== 1) {
        return Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Mensagem',
          textBody: 'A data da notificção precisa ser diferente da atual!',
          autoClose: 2000,
        });
      } else {
        inputs.notification = await schedulePushNotification(inputs.dateNotification, inputs.description);
      }
    } else {
      inputs.notification = "";
    }
    await newEvent(inputs);

    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Mensagem',
      textBody: 'Novo evento adicionado!',
      autoClose: 2000,
    });
    setInputs({
      patient_id: undefined,
      description: "",
      date: new Date(),
      hour: new Date(),
      color: selectedCheckbox,
      dateNotification: new Date(),
      notification: null
    });
  }

  const [datePickerVisible1, setDatePickerVisible1] = useState(false);
  const showDate1 = () => setDatePickerVisible1(true);
  const hideDatePicker1 = () => setDatePickerVisible1(false);

  const [datePickerVisible2, setDatePickerVisible2] = useState(false);
  const showDate2 = () => setDatePickerVisible2(true);
  const hideDatePicker2 = () => setDatePickerVisible2(false);

  const [datePickerVisible3, setDatePickerVisible3] = useState(false);
  const showDate3 = () => setDatePickerVisible3(true);
  const hideDatePicker3 = () => setDatePickerVisible3(false);

  const handleConfirmDate2 = (date) => {
    setInputs({ ...inputs, hour: date });
    hideDatePicker2();
  };

  const handleConfirmDate1 = (date) => {
    setInputs({ ...inputs, date: date });
    hideDatePicker1();
  };
  const handleConfirmDate3 = (date) => {
    setInputs({ ...inputs, dateNotification: date });
    hideDatePicker3();
  };

  const handleCheckboxChange = (id) => {
    setSelectedCheckbox(id);
    // Atualize inputs.color com base no id do checkbox selecionado
    const selectedColor = colors.find(color => color.id === id);
    setInputs(prevState => ({
      ...prevState,
      color: selectedColor ? selectedColor.color : "#81d4fa"
    }));
  }

  useEffect(() => {
    requestPermissionsAsync()

  }, [])

  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <LinearGradient
          colors={['#5E7B99', '#C4E1FF']}
          style={styles.gradient}>

          <Text style={styles.title}>Novo evento</Text>
        </LinearGradient>
      </View>

      <View style={styles.content}>

        <ScrollView>
          <Text style={styles.titleInput}>Paciente</Text>
          <SelectList
            placeholder='Selecione um paciente'
            searchPlaceholder='Pesquisar'
            boxStyles={styles.input}
            setSelected={(patient) => setInputs({ ...inputs, patient_id: patient })}
            data={listPatients.map(patient => ({ value: patient.name, key: patient.id }))}
            save='key'
          />


          <Text style={styles.titleInput}>Titulo do evento</Text>
          <TextInput
            style={styles.input}
            placeholder='Evento'
            value={inputs.description}
            onChangeText={(text) => setInputs({ ...inputs, description: text })}
          />

          <Text style={styles.titleInput}>Data e Hora</Text>
          <View style={styles.boxDate}>
            <TouchableOpacity onPress={showDate1} style={styles.inputDate}>
              <Text>{format(inputs.date, 'dd/MM/yyyy')}</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={showDate2} style={styles.inputDate}>
              <Text>{format(inputs.hour, 'HH:mm')}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxNotification}>
            <Text style={styles.titleInput}>Notificação</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}

            />
          </View>
          <TouchableOpacity onPress={showDate3} style={styles.input}>
            <Text>{format(inputs.dateNotification, 'HH:mm dd/MM/yyyy')}</Text>
          </TouchableOpacity>

          <Text style={styles.titleInput}>Cor do evento</Text>
          <View style={styles.boxCheckbox}>
            {colors.map(color => (
              <Checkbox
                key={color.id}
                style={{
                  backgroundColor: color.color,
                  borderColor: color.color,
                  borderRadius: 50,
                  width: 30,
                  height: 30
                }}
                value={selectedCheckbox === color.id}
                onValueChange={() => handleCheckboxChange(color.id)}
                color={selectedCheckbox === color.id ? '#4630EB' : undefined}
              />
            ))}
          </View>


          <View style={styles.areaButton}>
            <TouchableOpacity style={styles.button} onPress={handleEvent}>
              {loading ? (
                <ActivityIndicator size={25} color={Colors.white} />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>

        <DateTimePickerModal
          date={inputs.date}
          isVisible={datePickerVisible1}
          mode="date"
          display='inline'
          locale='pt'
          onConfirm={handleConfirmDate1}
          onCancel={hideDatePicker1}
        />
        <DateTimePickerModal
          date={inputs.hour}
          isVisible={datePickerVisible2}
          mode="time"
          display='inline'
          locale='pt'
          onConfirm={handleConfirmDate2}
          onCancel={hideDatePicker2}
        />
        <DateTimePickerModal
          date={inputs.dateNotification}
          isVisible={datePickerVisible3}
          mode="datetime"
          display='inline'
          locale='pt'
          onConfirm={handleConfirmDate3}
          onCancel={hideDatePicker3}
        />

      </View>
    </View>
  );
}
