import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { format } from 'date-fns';
import DailyRoutine from '../../../components/DailyRoutine';
import { AuthContext } from '../../../contexts/AuthContext';
import api from '../../../api';
import { styles } from './styles';

export default function DailyRoutinePatientGuardian({ route }) {
  const [patient, setPatient] = useState(route.params.patient);
  const [date, setDate] = useState(format(new Date(), 'dd-MM-yyyy'));
  const [routineDailys, setRoutineDailys] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadRoutine() {
      try {
        const routines = await api.get(`/dailys/${patient.id}/${date}`);
        setRoutineDailys(routines.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadRoutine();
  }, [patient.id, date]);

  return (
    <View style={styles.container}>
      <DailyRoutine
        data={routineDailys}
        patient={patient}
        user={user.role_id}
      />
    </View>
  );
}
