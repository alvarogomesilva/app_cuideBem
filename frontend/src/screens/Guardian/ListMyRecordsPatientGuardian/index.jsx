import { useEffect, memo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';

const MemoizedPatients = memo(Patients);

export default function ListMyRecordsPatientGuardian() {
    const { listPatients } = usePatients()
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Prontuários',
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MemoizedPatients
                    data={item}
                />}

                keyExtractor={(item) => item.id.toString()}
            />
            
        </SafeAreaView>
    );
};
