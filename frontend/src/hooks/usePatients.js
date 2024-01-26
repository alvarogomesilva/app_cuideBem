import { useCallback, useEffect, useState } from "react"
import api from "../api";
import { useNavigation } from "@react-navigation/native";

export const usePatients = () => {
    const navigation = useNavigation();
    const [listPatients, setListPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadPatients = useCallback(async () => {
        try {
            const patients = await api.get('/patients');
            setListPatients(patients.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPatients();
    }, [loadPatients]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => loadPatients());
        return unsubscribe;
    }, [navigation, loadPatients]);


    return { listPatients, loadPatients }
}