import { useEffect, memo } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable';

const MemoizedPatients = memo(Patients);

export default function ListMyRecordsPatientCaregiver() {
    const { listPatients } = usePatients()
    const navigation = useNavigation();

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
                <Animatable.View animation='fadeInLeft' duration={1000}>
                    <FlatList
                        style={styles.flatList}
                        data={listPatients}
                        renderItem={({ item }) => <MemoizedPatients
                            data={item}
                            onPress={() => navigation.navigate('ListMyDoctorsRecordCaregiver', { patient: item })}
                        />}

                        keyExtractor={(item) => item.id.toString()}
                    />
                </Animatable.View>
            </View>
        </View>

    );
}