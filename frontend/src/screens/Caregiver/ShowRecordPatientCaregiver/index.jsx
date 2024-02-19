import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import api from "../../../api";

export default function ShowRecordPatientCaregiver({ route }) {

    const [id, setId] = useState(route.params?.patient.id)
    const [doctor, setDoctor] = useState(route.params?.doctor.id)
    const [prescription, setPrescription] = useState({
        title: "",
        description: ""
    })

    const navigation = useNavigation()

    useEffect(() => {
        async function loadPrescription() {
            try {
                const prescription = await api.get(`/records/${id}/${doctor}`)
                setPrescription({
                    title: prescription.data?.title,
                    description: prescription.data?.description
                })
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
                    <View style={styles.boxPrescription}>
                        <Text style={styles.title}>Prontuário</Text>

                        {prescription?.title && <Text style={styles.titlePrescription}>"{prescription?.title}"</Text>}
                        
                    </View>

                    <Text style={styles.prescription}>
                        - {prescription.description ? (
                            prescription.description
                        ) : 'Não possui Prontuário'}
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