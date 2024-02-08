import { useEffect, memo } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';

const MemoizedPatients = memo(Patients);
export default function ListMyPrescriptionsPatientCaregiver() {

    const navigation = useNavigation();
    const { listPatients } = usePatients()

    return (
        <View style={styles.container}>
               <FlatList
                   style={styles.flatList}
                   data={listPatients}
                   renderItem={({ item }) => <MemoizedPatients
                       data={item}
                       onPress={() => navigation.navigate('ShowPrescriptionPatientCaregiver', { patient: item })}
                   />}
   
                   keyExtractor={(item) => item.id.toString()}
               />
        </View>
    )
}