import { View, Alert } from "react-native";
import { styles } from "./styles";
import Input from '../../../components/Input'
import Submit from '../../../components/Submit'
import { useEffect, useState } from "react";
import api from "../../../api";
import { usePrescription } from "../../../hooks/doctors/usePrescription";
import AwesomeAlert from 'react-native-awesome-alerts';

export default function PrescriptionPatientDoctor({ route }) {
    const [input, setInput] = useState('')
    const [recipe, setRecipe] = useState('')
    const [id, setId] = useState('')
    const [patient, setPatient] = useState(route.params.patient.id)
    const { handlePrescription, handleUpdatePrescription, loading } = usePrescription()
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        async function loadPrescription() {
            try {
                const prescription = await api.get(`/prescriptions/${patient}`)
                setInput(prescription.data.recipe)
                setId(prescription.data.id)
            } catch (error) {
                console.log(error)
            }
        }

        loadPrescription()
    }, [])

    const showAlertMessage = () => setShowAlert(true);
    
    const handleAddOrUpdatePrescription = async () => {
        if (id) {
            await handleUpdatePrescription(input, patient, id);
        } else {
            await handlePrescription(recipe, patient);
        }
        showAlertMessage();
        setTimeout(() => {
            setShowAlert(false)
        }, 1700)
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Input
                    value={id ? input : recipe}
                    onChangeText={id ? setInput : setRecipe}
                    height={150}
                    multiline={true}
                    paddingTop={15}
                />

                <Submit
                    text={id ? 'Atualizar' : 'Adicionar'}
                    onPress={handleAddOrUpdatePrescription}
                    loadingAuth={loading}
                />
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Mensagem"
                message={id ? "Receita atualizada com sucesso!" : "Receita adicionada com sucesso!"}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
            />
        </View>
    );
}
