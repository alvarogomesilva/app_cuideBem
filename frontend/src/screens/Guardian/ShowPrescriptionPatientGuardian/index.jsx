import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ShowPrescriptionPatientGuardian({ route }) {

    const [patient, setPatient] = useState(route.params?.patient)
    const navigation = useNavigation()

    const { recipe } = patient
    
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
                <Text>Dr Mary Jones</Text>
                <Text>Médico</Text>

                <View style={styles.hr}/>
                <Text>Receita</Text>
                <Text>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
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