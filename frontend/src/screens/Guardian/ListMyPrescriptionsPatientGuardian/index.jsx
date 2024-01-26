import { useEffect, memo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';

const MemoizedPatients = memo(Patients);
export default function ListMyPrescriptionsPatientGuardian() {
    
    const navigation = useNavigation();
    const { listPatients } = usePatients()

    useEffect(() => {
        navigation.setOptions({
            title: 'Receitas',
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MemoizedPatients
                    data={item}
                    onPress={() => navigation.navigate('ShowPrescriptionPatientGuardian', { patient: item })}
                />}

                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};