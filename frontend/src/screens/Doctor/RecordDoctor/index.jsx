import { FlatList, SafeAreaView, Text, View } from "react-native";
import {styles} from "./styles";
import Search from "../../../components/Search";
import { useEffect, useState } from "react";
import api from "../../../api";
import MyPatient from "../../../components/MyPatient";

export default function RecordDoctor() {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        async function loadPatients() {
            try {
                const patients = await api.get('/patients')
                setPatients(patients.data)
            } catch (error) {
                console.log(error)
            }
        }

        loadPatients()
    }, [])

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.title}>Prontuários</Text>
            <Search />

            <FlatList 
                data={patients}
                renderItem={({item}) => <MyPatient data={item} />}
            />

            </View>

        </SafeAreaView>
    );
}
