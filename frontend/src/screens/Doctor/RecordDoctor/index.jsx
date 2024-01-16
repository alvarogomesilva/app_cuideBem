import { FlatList, SafeAreaView, Text, View } from "react-native";

import { styles } from "./styles";
import Search from "../../../components/Search";
import { useEffect, useState } from "react";
import api from "../../../api";
import Patients from "../../../components/Patients";
import { useNavigation } from "@react-navigation/native";

export default function RecordDoctor() {
    const [listPatients, setListPatients] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        async function loadPatients() {
            try {
                const patients = await api.get('/patients')
                setListPatients(patients.data)

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
                    data={listPatients}
                    renderItem={({ item }) => <Patients
                        data={item}
                        onPress={() => navigation.navigate('NewRecord')}
                    />}
                />


            </View>

        </SafeAreaView>
    );

}