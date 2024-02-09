import React, { useState, useEffect } from 'react';
import { View, Keyboard, TextInput, Text, Image } from 'react-native';
import Submit from '../../../components/Submit';
import { usePrescription } from '../../../hooks/doctors/usePrescription';
import api from '../../../api';
import { styles } from './styles';

import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function PrescriptionPatientDoctor({ route }) {
    const [input, setInput] = useState('');
    const [id, setId] = useState('');
    const [patient, setPatient] = useState(route.params.patient.id);
    const [photo, setPhoto] = useState(route.params.patient.photo)
    const { handlePrescription, handleUpdatePrescription, loading } = usePrescription();
    const [showAlert, setShowAlert] = useState(false);

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

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter') {
          Keyboard.dismiss();
        }
      };

    const handleAddOrUpdatePrescription = async () => {
        if (id) {
            Keyboard.dismiss();
            await handleUpdatePrescription(input, patient, id);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Mensagem',
                textBody: 'Atualizado com sucesso!',
                autoClose: 1500,
                
            })
        } else {
            Keyboard.dismiss();
            await handlePrescription(input, patient);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Mensagem',
                textBody: 'Adicionado com sucesso!',
                autoClose: 1500
            })
        }
        showAlertMessage();
        setTimeout(() => {
            setShowAlert(false);
        }, 1700);
    };

    return (
            <View style={styles.container}>

                <View style={styles.patient}>
                    <Image
                        source={{ uri: `http://10.3.18.71:3000/files/${photo}` }}
                        width={60}
                        height={60}
                        borderRadius={30}
                    />
                    <Text style={styles.name}>{route.params.patient.name}</Text>
                </View>


                <View style={styles.box}>
                    <View style={styles.content}>

                        <Text style={styles.text}>Descreva a receita:</Text>

                        <TextInput
                            placeholder='Descreva a receita'
                            style={styles.textarea}
                            multiline={true}
                            value={input}
                            onChangeText={(text) => setInput(text)}
                            onKeyPress={handleKeyPress}
                        />

                        <Submit
                            text={id ? 'Atualizar' : 'Adicionar'}
                            onPress={handleAddOrUpdatePrescription}
                            loadingAuth={loading}
                        />
                    </View>
                </View>

            </View>
    );
}
