import { memo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';
import * as Animatable from 'react-native-animatable';

const MemoizedPatients = memo(Patients);

export default function ListMyDailyRoutinePatientGuardian() {
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
                    <Animatable.View animation='fadeInLeft' duration={1000}>
                        <FlatList
                            style={styles.flatList}
                            data={listPatients}
                            renderItem={({ item }) => <MemoizedPatients
                                data={item}
                                onPress={() => navigation.navigate('DailyRoutinePatientGuardian', { patient: item })}
                            />}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </Animatable.View>
                ) : (
                    <Text style={styles.noPatients}>Nenhum paciente cadastrado!</Text>
                )}
            </View>

            {listPatients.length > 0 && (
                <View style={styles.areaButton}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('NewDailyRoutineGuardian')}
                    >
                        <Entypo name="plus" size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
            )}

        </View>
    );
};



