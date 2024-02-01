import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import Input from '../../../components/Input'
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
import { useState } from 'react';
import { Masks } from 'react-native-mask-input';
import { useNewEvent } from '../../../hooks/useNewEvent';
import { white } from '../../../constants/colors';
import { format } from 'date-fns';


const hourMask = [/\d/, /\d/, ":", [/\d/], [/\d/]];


const staticData = [
  {
    id: 0,
    color: "#FF00FF"
  },
  {
    id: 1,
    color: "#2196f3"
  },
  {
    id: 2,
    color: "#4caf50"
  },
  {
    id: 3,
    color: "#ffeb3b"
  },
];

export default function NewDiaryPatientGuardian({ route }) {
  const { newEvent, loading } = useNewEvent()
  const patient_id = route.params.patient.id

  const [inputs, setInputs] = useState({
    patient_id,
    description: "",
    date: "",
    hour: "",
    color: ""
  })

  const handleEvent = async () => {
    await newEvent(inputs)
    setInputs({
      patient_id,
      description: "",
      date: "",
      hour: "",
      color: ""
    })
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


        <BouncyCheckboxGroup
          style={styles.boxCheckbox}
          data={staticData}
          onChange={(selectedItem) => setInputs({ ...inputs, color: selectedItem.color })}
          checkboxProps={{
            size: 50,
          }}
        />


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
  )
}