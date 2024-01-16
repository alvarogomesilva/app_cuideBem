import { FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

import Search from "../../../components/Search";
import { useEffect, useState } from "react";
import Patients from "../../../components/Patients";
import api from "../../../api";
import { useNavigation } from "@react-navigation/native";

export default function RecipesDoctor() {
    const [patients, setPatients] = useState([])
    const navigation = useNavigation()

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
                <Text style={styles.title}>Receitas</Text>
                <Search />

                <FlatList
                    data={patients}
                    renderItem={({ item }) => <Patients
                        data={item}
                        onPress={() => navigation.navigate('NewRecipes')}
                    />}
                />

            </View>

        </SafeAreaView>
    );
}
