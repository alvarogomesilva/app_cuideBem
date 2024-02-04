import React, { memo, useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import styles from "./styles";
import Search from "../../../components/Search";
import Patients from "../../../components/Patients";
import api from "../../../api";
import { useNavigation } from "@react-navigation/native";

const MemoizedPatients = memo(Patients);

export default function ListPrescriptionsPatientsDoctor() {
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

    const handleSearchChange = useCallback((text) => {
        setSearchTerm(text);
    }, []);

    const handleSearchSubmit = useCallback(() => {
        loadPatients();
    }, [loadPatients]);

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Search
                    value={searchTerm}
                    onChangeText={handleSearchChange}
                    onSubmitEditing={handleSearchSubmit}
                />

                {loading ? (
                    <ActivityIndicator size="large" color="#FFF" />
                ) : (
                    <FlatList
                        data={listPatients}
                        renderItem={({ item }) => (
                            <MemoizedPatients
                                data={item}
                                onPress={() => navigation.navigate('PrescriptionPatientDoctor', {patient: item})}
                            />
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
