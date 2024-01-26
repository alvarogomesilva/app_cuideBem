import { useEffect, useState, useCallback, memo } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import api from '../../../api';

const MemoizedPatients = memo(Patients);

const ListMyPatientsGuardian = ({ route }) => {

    const navigation = useNavigation();
    const [listPatients, setListPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadPatients = useCallback(async () => {
        try {
            const patients = await api.get('/patients');
            setListPatients(patients.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPatients();
    }, [loadPatients]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => loadPatients());
        return unsubscribe;
    }, [navigation, loadPatients]);

    const paramKey = route.params?.paramKey ?? '';
    const newPatient = route.params.newPatient ?? '';

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MemoizedPatients
                    data={item} newPatient={newPatient}
                />}
                keyExtractor={(item) => item.id.toString()}
            />

            {newPatient && (
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('NewPatientGuardian')}
                >
                    <Entypo name="plus" size={30} color="#FFF" />
                </TouchableOpacity>
            )}


        </SafeAreaView>
    );
};

export default ListMyPatientsGuardian;
