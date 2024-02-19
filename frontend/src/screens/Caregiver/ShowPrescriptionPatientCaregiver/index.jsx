import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import api from "../../../api";

export default function ShowPrescriptionPatientCaregiver({ route }) {

    const [id, setId] = useState(route.params?.patient.id)
    const [doctor, setDoctor] = useState(route.params?.doctor.id)
    const [prescription, setPrescription] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        async function loadPrescription() {
            try {
                const prescription = await api.get(`/patients/${id}/${doctor}`)
                setPrescription(prescription.data?.recipe)
            } catch (error) {
                console.log(error)
            }
        }

        loadPrescription()
    }, [])

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.top}>
                    <View style={styles.rounded}>
                        <Image
                            source={require('../../../../assets/doctor.png')}
                            style={{ width: 250, height: 250 }}
                        />
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.doctor}>Dr. {route.params.doctor.name}</Text>
                    <Text style={styles.profession}>Médico</Text>

                    <View style={styles.hr} />
                    <Text style={styles.title}>Receita</Text>
                    <Text style={styles.prescription}>
                        - {prescription ? (
                            prescription
                        ): 'Não possui receita'}
                    </Text>

                    <View style={styles.areaButtom}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.9}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}