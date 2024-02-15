import { useEffect, useState, useCallback, memo } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import api from '../../../api';
import { usePatients } from '../../../hooks/usePatients';

const MemoizedPatients = memo(Patients);

export default function ListMyEventsPatientCaregiver({ route }) {
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
                        renderItem={({ item }) => <MemoizedPatients data={item}
                        onPress={() => navigation.navigate('EventsPatientCaregiver', { patient: item })}
                        />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                ) : (
                    <Text style={styles.noPatients}>Você não tem nenhum paciente!</Text>
                )}
            </View>

            {/* <View style={styles.areaButton}>
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => navigation.navigate('NewPatientGuardian')}
                    >
                    <Entypo name="plus" style={styles.buttonText} />
                </TouchableOpacity>
            </View> */}

        </View>
    );
};


