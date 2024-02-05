import { View, Text, Image, FlatList } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import api from '../../../api';
import { format } from 'date-fns'
import { neutral } from '../../../constants/colors';
import DailyRoutine from '../../../components/DailyRoutine';


export default function DailyRoutinePatientGuardian({ route }) {

  const [patient, setPatient] = useState(route.params.patient)
  const [date, setDate] = useState(format(new Date(), 'dd-MM-yyyy'))
  const [routineDailys, setRoutineDailys] = useState([])

  useEffect(() => {
    async function loadRoutine() {
      try {
        const routines = await api.get(`/dailys/${patient.id}/${date}`)
        setRoutineDailys(routines.data)
      } catch (error) {
        console.log(error)
      }
    }

    loadRoutine()
  }, [])

  return (
    <View style={styles.container}>
      <DailyRoutine 
        data={routineDailys}
        patient={patient}
      />
        
            
    </View>
  );
};

