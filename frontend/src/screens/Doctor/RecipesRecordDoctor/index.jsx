import { FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

import Search from "../../../components/Search";
import { useEffect, useState } from "react";
import Patients from "../../../components/Patients";
import api from "../../../api";
import { useNavigation } from "@react-navigation/native";

export default function RecipesRecordDoctor({ route }) {

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

    if (route.params.paramKey === 'Record') {
        return (
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Prontuários</Text>
                    <Search />

                    <FlatList
                        data={patients}
                        renderItem={({ item }) => <Patients
                            data={item}
                            onPress={() => navigation.navigate('NewRecipesRecord', { paramKey: 'NewRecord' })}
                        />}
                    />


                </View>

            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Receitas</Text>
                    <Search />

                    <FlatList
                        data={patients}
                        renderItem={({ item }) => <Patients
                            data={item}
                            onPress={() => navigation.navigate('NewRecipesRecord' , { paramKey: 'NewRecipes' })}
                        />}
                    />

                </View>

            </SafeAreaView>
        )
    }
}
