import React, { memo, useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";
import styles from "./styles";
import Patients from "../../../components/Patients";
import api from "../../../api";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';

const MemoizedPatients = memo(Patients);

export default function ListRecordsPatientsDoctor() {
    const navigation = useNavigation();
    const [listPatients, setListPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const loadPatients = useCallback(async () => {
        setLoading(true);
        try {
            const patients = await api.get('/patients', { params: { search: searchTerm } });
            setListPatients(patients.data);
        } catch (error) {
            console.error("Error loading patients:", error);
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => loadPatients());
        return unsubscribe;
    }, [navigation, loadPatients]);

    useEffect(() => {
        loadPatients();
    }, [loadPatients]);


    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>

                    <Text style={styles.title}>Encontre um paciente</Text>
                    <View style={styles.boxSearch}>

                        <TextInput
                            style={styles.search}
                            placeholder="Pesquisar"
                            value={searchTerm}
                            onChangeText={(text) => setSearchTerm(text)}
                        />
                        <Feather name="search" style={styles.icon} />
                    </View>

                </LinearGradient>
            </View>

            <View style={styles.content}>
                {loading ? (
                    <ActivityIndicator size="large" color="#FFF" />
                ) : (
                    (listPatients && listPatients.length > 0 ? (
                        <FlatList
                            data={listPatients}
                            renderItem={({ item }) => (
                                <MemoizedPatients
                                    data={item}
                                    onPress={() => navigation.navigate('RecordPatientDoctor', { patient: item })}
                                />
                            )}
                        />
                    ) : (
                        <Text style={styles.text}>Nenhum paciente encontrado!</Text>
                    ))
                )}

            </View>
        </View>
    );
}

