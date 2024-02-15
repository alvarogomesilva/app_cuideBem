import { memo } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';
import { LinearGradient } from "expo-linear-gradient";
import ButtonBottom from '../../../components/ButtonBottom'
const MemoizedPatients = memo(Patients);
export default function ListMyEventsPatientGuardian() {
    
    const navigation = useNavigation();
    const { listPatients } = usePatients()

    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>
                        
                    <Text style={styles.title}>Meus Pacientes</Text>

                </LinearGradient>
            </View>
            <View style={styles.content}>
                {listPatients.length > 0 ? (
                    <FlatList
                        style={styles.flatList}
                        data={listPatients}
                        renderItem={({ item }) => <MemoizedPatients
                            data={item}
                            onPress={() => navigation.navigate('EventsPatientGuardian', { patient: item })}
                        />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                ) : (
                    <Text style={styles.noPatients}>Nenhum paciente cadastrado!</Text>
                )}
            </View>

             <ButtonBottom onPress={() => navigation.navigate('NewEventPatientGuardian')} />


        </View> 
    );
}