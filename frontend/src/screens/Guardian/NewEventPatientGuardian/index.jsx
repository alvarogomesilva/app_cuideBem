import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import Input from '../../../components/Input';
import { Masks } from 'react-native-mask-input';
import { useNewEvent } from '../../../hooks/useNewEvent';
import { white } from '../../../constants/colors';

const hourMask = [/\d/, /\d/, ":", [/\d/], [/\d/]];

const colors = [
  { id: 0, label: 'Azul', color: "#81d4fa" },
  { id: 1, label: 'Verde', color: "#b2dfdb" },
  { id: 2, label: 'Roxo', color: "#d1c4e9" },
  { id: 3, label: 'Vermelho', color: "#ffcdd2" },
];

export default function NewEventPatientGuardian({ route }) {
  const { newEvent, loading } = useNewEvent();
  const [selectedColor, setSelectedColor] = useState('');
  const patient_id = route.params.patient.id;

  const [inputs, setInputs] = useState({
    patient_id,
    description: "",
    date: "",
    hour: "",
    color: "#81d4fa"
  });


  const handleEvent = async () => {
    await newEvent(inputs)
    console.log(inputs)
    setInputs({
      patient_id,
      description: "",
      date: "",
      hour: "",
      color: "#81d4fa"
    });
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder='Digite uma descrição'
          value={inputs.description}
          onChangeText={(text) => setInputs({ ...inputs, description: text })}
        >
          <MaterialIcons name="description" style={styles.icon} />
        </Input>

        <Input
          placeholder='Digite uma data'
          value={inputs.date}
          onChangeText={(text) => setInputs({ ...inputs, date: text })}
          mask={Masks.DATE_DDMMYYYY}
          keyboardType="numeric"
        >
          <Fontisto name="date" style={styles.icon} />
        </Input>

        <Input
          placeholder='Digite um horário'
          value={inputs.hour}
          onChangeText={(text) => setInputs({ ...inputs, hour: text })}
          keyboardType="numeric"
          mask={hourMask}
        >
          <Feather name="clock" style={styles.icon} />
        </Input>



        <TouchableOpacity
          style={styles.submit}
          onPress={handleEvent}
          activeOpacity={0.9}
        >
          {loading ? (
            <ActivityIndicator size={25} color={white} />
          ) : (
            <Text style={styles.submitText}>Adicionar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
