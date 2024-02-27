import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../../api';
import { format } from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import { usePatients } from '../../../hooks/usePatients';
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../../../constants/colors';
import { Toast, ALERT_TYPE } from "react-native-alert-notification";

export default function NewDailyRoutineGuardian() {
  const [loading, setLoading] = useState(false);
  const { listPatients } = usePatients();

  const [inputs, setInputs] = useState({
    patient_id: "",
    title: "",
    description: "",
    hour: new Date(),
    date: new Date(),
    final_date: new Date()
  });

  const [datePickerVisible1, setDatePickerVisible1] = useState(false);
  const [datePickerVisible2, setDatePickerVisible2] = useState(false);
  const [datePickerVisible3, setDatePickerVisible3] = useState(false);

  const showDate1 = () => setDatePickerVisible1(true);
  const showDate2 = () => setDatePickerVisible2(true);
  const showDate3 = () => setDatePickerVisible3(true);

  const hideDatePicker1 = () => setDatePickerVisible1(false);
  const hideDatePicker2 = () => setDatePickerVisible2(false);
  const hideDatePicker3 = () => setDatePickerVisible3(false);

  const handleConfirmDate1 = (date) => {
    setInputs({ ...inputs, date: date });
    hideDatePicker1();
  };

  const handleConfirmDate2 = (date) => {
    setInputs({ ...inputs, final_date: date });
    hideDatePicker2();
  };

  const handleConfirmDate3 = (date) => {
    setInputs({ ...inputs, hour: date });
    hideDatePicker3();
  };

  const handleDailyRoutine = async () => {
    if (inputs.patient_id === "") {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Mensagem',
        textBody: 'Selecione um paciente!',
        autoClose: 2000,
      });
      return;
    }

    if (inputs.title.trim() === "") {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Mensagem',
        textBody: 'Descreva um titulo!',
        autoClose: 2000,
      });
      return;
    }

    if (inputs.description.trim() === "") {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Mensagem',
        textBody: 'Descreva a rotina!',
        autoClose: 2000,
      });
      return;
    }


    setLoading(true);
    try {
      const response = await api.post('/dailys', inputs);
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Mensagem',
        textBody: 'Nova rotina adicionada!',
        autoClose: 2000,
      });
      setInputs({
        patient_id: "",
        title: "",
        description: "",
        hour: new Date(),
        date: new Date(),
        final_date: new Date()
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <LinearGradient
          colors={['#5E7B99', '#C4E1FF']}
          style={styles.gradient}>
          <Text style={styles.title}>Nova Rotina diária</Text>
        </LinearGradient>
      </View>

      <View style={styles.content}>
        <Text style={styles.titleInput}>Paciente</Text>

        <SelectList
          boxStyles={styles.input}
          setSelected={(patient) => setInputs({ ...inputs, patient_id: patient })}
          data={listPatients.map(patient => ({ value: patient.name, key: patient.id }))}
          save='key'
        />
        <Text style={styles.titleInput}>Titulo</Text>

        <TextInput
          style={styles.input}
          placeholder='Descreva um título'
          value={inputs.title}
          onChangeText={(text) => setInputs({ ...inputs, title: text })}
        />

        <Text style={styles.titleInput}>Descrição</Text>

        <TextInput
          style={styles.input}
          placeholder='Descreva uma descrição'
          value={inputs.description}
          onChangeText={(text) => setInputs({ ...inputs, description: text })}
        />

        <Text style={styles.titleInput}>Data e Hora</Text>

        <View style={styles.box}>
          <TouchableOpacity onPress={showDate1} activeOpacity={0.9} style={styles.date}>
            <Text>{format(inputs.date, 'dd/MM/yyyy')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={showDate2} activeOpacity={0.9} style={styles.date}>
            <Text>{format(inputs.final_date, 'dd/MM/yyyy')}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={showDate3} activeOpacity={0.9} style={styles.input}>
          <Text>{format(inputs.hour, 'HH:mm')}</Text>
        </TouchableOpacity>

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.button} onPress={handleDailyRoutine} activeOpacity={0.9}>
            {loading ? (
              <ActivityIndicator size={25} color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Cadastrar</Text>
            )}
          </TouchableOpacity>
        </View>

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
          date={inputs.final_date}
          isVisible={datePickerVisible2}
          mode="date"
          display='inline'
          locale='pt'
          onConfirm={handleConfirmDate2}
          onCancel={hideDatePicker2}
        />

        <DateTimePickerModal
          date={inputs.hour}
          isVisible={datePickerVisible3}
          mode="time"
          display='inline'
          locale='pt'
          onConfirm={handleConfirmDate3}
          onCancel={hideDatePicker3}
        />
      </View>
    </View>
  );
}
