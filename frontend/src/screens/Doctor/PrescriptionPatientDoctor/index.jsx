import React, { useState, useEffect } from 'react';
import { View, Keyboard, TextInput, Text, Image } from 'react-native';
import Submit from '../../../components/Submit';
import { usePrescription } from '../../../hooks/doctors/usePrescription';
import AwesomeAlert from 'react-native-awesome-alerts';
import api from '../../../api';
import { styles } from './styles';

export default function PrescriptionPatientDoctor({ route }) {
    const [input, setInput] = useState('');
    const [id, setId] = useState('');
    const [patient, setPatient] = useState(route.params.patient.id);
    const [photo, setPhoto] = useState(route.params.patient.photo)
    const { handlePrescription, handleUpdatePrescription, loading } = usePrescription();
    const [showAlert, setShowAlert] = useState(false);
    console.log(route.params.patient)
    useEffect(() => {
        async function loadPrescription() {
            try {
                const prescription = await api.get(`/prescriptions/${patient}`);
                setInput(prescription.data.recipe);
                setId(prescription.data.id);
            } catch (error) {
                console.log(error);
            }
        }

        loadPrescription();
    }, [patient]);

    const showAlertMessage = () => setShowAlert(true);

    const handleAddOrUpdatePrescription = async () => {
        if (id) {
            Keyboard.dismiss();
            await handleUpdatePrescription(input, patient, id);
        } else {
            Keyboard.dismiss();
            await handlePrescription(input, patient);
        }
        showAlertMessage();
        setTimeout(() => {
            setShowAlert(false);
        }, 1700);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                    <View style={styles.box}>
        <Image
            source={{ uri: `http://192.168.0.100:3000/files/${photo}`}}
            width={100}
            height={100}
            borderRadius={50}
         />
                </View>

                <TextInput
                placeholder='Descreva a receita' 
                    style={styles.textarea}
                    multiline={true}
                    value={input}
                    onChangeText={(text) => setInput(text)}
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
                message={id ? 'Receita atualizada com sucesso!' : 'Receita adicionada com sucesso!'}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
            />
        </View>
    );
}
