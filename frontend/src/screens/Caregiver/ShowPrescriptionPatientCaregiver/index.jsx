import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function ShowPrescriptionPatientCaregiver({ route }) {

    const [patient, setPatient] = useState(route.params?.patient)
    const navigation = useNavigation()

    const { recipe } = patient
    
    return (
        <View>
            {
                recipe ? (
                    <Text>{recipe}</Text>
                ) : (

                    <Text>Não tem receita</Text>
                )
            }



        </View>
    )
}