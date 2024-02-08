import React, { useEffect, useState } from "react";
import { Keyboard, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Submit from "../../../components/Submit";
import MaskInput, { Masks } from "react-native-mask-input";
import { useRecord } from "../../../hooks/doctors/useRecord";
import api from "../../../api";
import AwesomeAlert from 'react-native-awesome-alerts';

export default function RecordPatientDoctor({ route }) {
    const { handleRecord, handleUpdateRecord, loading } = useRecord();
    const [patient, setPatient] = useState(route.params.patient.id);
    const [id, setId] = useState('');
    const [inputs, setInputs] = useState({
        title: '',
        initial_date: '',
        final_date: '',
        description: '',
        patient_id: patient
    });
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        async function loadPrescription() {
            try {
                const record = await api.get(`/records/${patient}`);
                if (record.data) {
                    const { title, initial_date, final_date, description } = record.data;
                    setInputs({
                        title,
                        initial_date,
                        final_date,
                        description,
                        patient_id: patient
                    });
                    setId(record.data.id);
                }
            } catch (error) {
                console.log(error);
            }
        }

        loadPrescription();
    }, []);

    const handleAddOrUpdateRecord = async () => {
        try {
            if (id) {
                await handleUpdateRecord(inputs, id);
                setAlertMessage("Registro atualizado com sucesso!");
            } else {
                await handleRecord(inputs);
                setAlertMessage("Registro adicionado com sucesso!");
            }
            Keyboard.dismiss()
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false)
            }, 1700)
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Input
                    placeholder='Titulo'
                    value={inputs.title}
                    onChangeText={(text) => setInputs({ ...inputs, title: text })}
                />

                <View style={styles.box}>
                    <MaskInput
                        placeholder="01/01/2024"
                        style={styles.input}
                        mask={Masks.DATE_DDMMYYYY}
                        value={inputs.initial_date}
                        keyboardType="numeric"
                        onChangeText={(text) => setInputs({ ...inputs, initial_date: text })}
                    />

                    <Text style={styles.text}>Até</Text>
                    <MaskInput
                        placeholder="01/04/2024"
                        style={styles.input}
                        mask={Masks.DATE_DDMMYYYY}
                        value={inputs.final_date}
                        keyboardType="numeric"
                        onChangeText={(text) => setInputs({ ...inputs, final_date: text })}
                    />
                </View>

                <Input
                    placeholder='Descrição'
                    paddingTop={15}
                    multiline={true}
                    height={100}
                    value={inputs.description}
                    onChangeText={(text) => setInputs({ ...inputs, description: text })}
                />

                <Submit
                    text={id ? 'Atualizar' : 'Adicionar'}
                    onPress={handleAddOrUpdateRecord}
                    loadingAuth={loading}
                />
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Mensagem"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={false}
                onConfirmPressed={handleCloseAlert}
            />
        </View>
    )
}
