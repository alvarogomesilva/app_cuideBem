import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { format } from 'date-fns';
import { useFocusEffect } from '@react-navigation/native';
import DailyRoutine from '../../../components/DailyRoutine';
import { AuthContext } from '../../../contexts/AuthContext';
import api from '../../../api';
import { styles } from './styles';
import { LinearGradient } from "expo-linear-gradient";
export default function DailyRoutinePatientCaregiver({ route }) {

  const [patient, setPatient] = useState(route.params.patient);
  const [date, setDate] = useState(format(new Date(), 'dd-MM-yyyy'));
  const [routineDailys, setRoutineDailys] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(0);
  const { user } = useContext(AuthContext);

  const loadRoutine = async () => {
    try {
      const routines = await api.get(`/dailys/${patient.id}/${date}`);
      routines.data.sort((a, b) => new Date(a.hour) - new Date(b.hour));
      setRoutineDailys(routines.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadRoutine();
    }, [patient.id, date])
  );

  useEffect(() => {
    loadRoutine();
  }, [updateCounter]);

  const handleUpdate = () => {
    setUpdateCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <LinearGradient
          colors={['#5E7B99', '#C4E1FF']}
          style={styles.gradient}>

          <View style={styles.areaImage}>
            <Image
              source={{ uri: `http://10.3.18.71:3000/files/${patient.photo}` }}
              style={styles.image}
            />

            <View>
              <Text style={styles.name}>{patient.name}</Text>
              <Text style={styles.subTitle}>Paciente</Text>
            </View>
          </View>

        </LinearGradient>
      </View>

      <View style={styles.content}>
        <DailyRoutine
          data={routineDailys}
          patient={patient}
          user={user.role_id}
          onUpdate={handleUpdate}
        />

      </View>
    </View>
  );
}