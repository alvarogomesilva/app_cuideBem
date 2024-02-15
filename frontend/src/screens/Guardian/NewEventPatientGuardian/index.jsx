import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import Input from '../../../components/Input';
import { Masks } from 'react-native-mask-input';
import { useNewEvent } from '../../../hooks/useNewEvent';
import Colors, { white } from '../../../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Checkbox from 'expo-checkbox';
import { SelectList } from 'react-native-dropdown-select-list';
import { usePatients } from '../../../hooks/usePatients';
import { format } from 'date-fns';

const hourMask = [/\d/, /\d/, ":", [/\d/], [/\d/]];

const colors = [
  { id: 0, label: 'Azul', color: "#81d4fa" },
  { id: 1, label: 'Verde', color: "#b2dfdb" },
  { id: 2, label: 'Roxo', color: "#d1c4e9" },
  { id: 3, label: 'Vermelho', color: "#ffcdd2" },
  { id: 4, label: 'Amarelo', color: "#f4ff81" },
];

export default function NewEventPatientGuardian({ route }) {
  const { newEvent, loading } = useNewEvent();
  const patient_id = route.params?.patient.id;
  const { listPatients } = usePatients()

  const [inputs, setInputs] = useState({
    patient_id,
    description: "",
    date: new Date(),
    hour: new Date(),
    color: "#81d4fa"
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState(0);

  const handleEvent = async () => {
    await newEvent(inputs);
    setInputs({
      patient_id,
      description: "",
      date: new Date(),
      hour: new Date(),
      color: selectedCheckbox
    });
  }

  const [datePickerVisible1, setDatePickerVisible1] = useState(false);
  const showDate1 = () => setDatePickerVisible1(true);
  const hideDatePicker1 = () => setDatePickerVisible1(false);

  const [datePickerVisible2, setDatePickerVisible2] = useState(false);
  const showDate2 = () => setDatePickerVisible2(true);
  const hideDatePicker2 = () => setDatePickerVisible2(false);

  const handleConfirmDate2 = (date) => {
    setInputs({ ...inputs, hour: date });
    hideDatePicker2();
  };

  const handleConfirmDate1 = (date) => {
    setInputs({ ...inputs, date: date });
    hideDatePicker1();
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

      <SelectList
          boxStyles={styles.input}
          setSelected={(patient) => setInputs({ ...inputs, patient_id: patient })}
          data={listPatients.map(patient => ({ value: patient.name, key: patient.id }))}
          save='key'
        />


        <TextInput
          style={styles.input}
          placeholder='Evento'
          value={inputs.description}
          onChangeText={(text) => setInputs({...inputs, description: text})}
        />

        <TouchableOpacity onPress={showDate1}>
          <TextInput
            value={format(inputs.date, 'dd/MM/yyyy')}
            style={styles.input}
            placeholder='Digite uma data'
            pointerEvents="none"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={showDate2}>
          <TextInput
            style={styles.input}
            placeholder='Digite um horário'
            pointerEvents='none'
            value={format(inputs.hour, 'HH:mm')}
          />
        </TouchableOpacity>

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
      </View>
    </View>
  );
}
