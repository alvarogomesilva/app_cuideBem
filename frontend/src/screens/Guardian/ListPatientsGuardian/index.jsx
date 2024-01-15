import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import MyPatient from '../../../components/MyPatient';
import api from '../../../api';

export default function ListPatientsGuardian() {
    const navigation = useNavigation()
    const [listPatients, setListPatients] = useState([])

    useEffect(() => {
        async function loadPatients() {
            try {
                const patients = await api.get('/patients')
                setListPatients(patients.data)
            } catch (error) {
                console.log(error)
            }
        }

        loadPatients()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pacientes</Text>

            <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MyPatient data={item}/>}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('NewPatientGuardian')}
            >
                <Entypo name="plus" size={30} color="#FFF" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}