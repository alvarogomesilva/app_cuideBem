import { useEffect, memo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';

const MemoizedPatients = memo(Patients);
export default function ListMyDailyRoutinePatientGuardian() {
    
    const navigation = useNavigation();
    const { listPatients } = usePatients()

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MemoizedPatients
                    data={item}
                    onPress={() => navigation.navigate('DailyRoutinePatientGuardian', { patient: item })}
                />}

                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};