import { useEffect, useState, useCallback, memo } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import api from '../../../api';
import { primary } from '../../../constants/colors';

const MemoizedPatients = memo(Patients);

const ListPatientsGuardian = () => {
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

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pacientes</Text>

            <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MemoizedPatients data={item} />}
                keyExtractor={(item) => item.id.toString()}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('NewPatientGuardian')}
            >
                <Entypo name="plus" size={30} color="#FFF" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ListPatientsGuardian;
