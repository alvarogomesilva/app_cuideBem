import { Text, View } from "react-native";
import { styles } from "./styles";
import Input from '../../../components/Input'
import Submit from '../../../components/Submit'
import { useContext, useEffect, useState } from "react";
import api from "../../../api";
import { AuthContext } from '../../../contexts/AuthContext'

export default function PrescriptionPatientDoctor({ route }) {
    const [input, setInput] = useState('')
    const [recipe, setRecipe] = useState('')
    const [patient, setPatient] = useState(route.params.patient.id)
    useEffect(() => {
        async function loadPrescription() {
            try {
                const prescription = await api.get(`/prescriptions/${patient}`)
                setInput(prescription.data.recipe)
            } catch (error) {
                console.log(error)
            }
        }

        loadPrescription()
    }, [])

    const handlePrescription = async () => {
        try {
            const response = await api.post('/prescriptions', {
                recipe: recipe,
                patient_id: patient
            })
            console.log('deu certo')
        } catch (error) {
            console.log(error)
        }
    }

    if (input) {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Input
                        value={input}
                        onChangeText={setInput}
                    />

                    <Submit text='Atualizar' />
                </View>
            </View>
        )

    } else {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Input
                        value={recipe}
                        onChangeText={setRecipe}
                    />

                    <Submit text='Adicionar' onPress={handlePrescription} />
                </View>
            </View>
        )
    }


}