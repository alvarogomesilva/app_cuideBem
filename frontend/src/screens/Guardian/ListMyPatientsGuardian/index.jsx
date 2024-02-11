import { useEffect, useState, useCallback, memo } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import api from '../../../api';
import { usePatients } from '../../../hooks/usePatients';

const MemoizedPatients = memo(Patients);

const ListMyPatientsGuardian = ({ route }) => {
    const navigation = useNavigation();
    const { listPatients } = usePatients()


    //const paramKey = route.params?.paramKey ?? '';
    //const newPatient = route.params.newPatient ?? '';

    return (
        <SafeAreaView style={styles.container}>
            {listPatients.length > 0 ? (
                <FlatList
                style={styles.flatList}
                data={listPatients}
                renderItem={({ item }) => <MemoizedPatients
                    data={item}
                />}
                keyExtractor={(item) => item.id.toString()}
            />
            ): (
                <Text style={styles.noPatients}>Nenhum paciente cadastrado!</Text>
            )}

            {/* {newPatient && (
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('NewPatientGuardian')}
                >
                    <Entypo name="plus" size={30} color="#FFF" />
                </TouchableOpacity>
            )} */}


        </SafeAreaView>
    );
};

export default ListMyPatientsGuardian;
