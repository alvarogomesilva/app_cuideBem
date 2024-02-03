import { useState } from "react";
import { Text, View } from "react-native";

export default function ShowRecordPatientCaregiver({ route }) {
    const [patient, setPatient] = useState(route.params?.patient)
    const { title } = patient
    return (
        <View>
         {
            title ? (
                <Text>{title}</Text>

            ) : (
                <Text>Não tem prontuário</Text>
            )
         }

        </View>
    )
}