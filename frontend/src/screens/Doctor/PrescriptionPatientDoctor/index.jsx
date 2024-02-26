import React, { useState, useEffect } from 'react';
import { View, Keyboard, TextInput, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { usePrescription } from '../../../hooks/doctors/usePrescription';
import api, { URL } from '../../../api';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../../../validations/prescriptionValidation"

export default function PrescriptionPatientDoctor({ route }) {
    const [patient, setPatient] = useState(route.params.patient.id);
    const [id, setId] = useState('');
    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            description: ''
        }
    });
    const [photo, setPhoto] = useState(route.params.patient.photo);
    const { handlePrescription, handleUpdatePrescription, loading } = usePrescription();

    useEffect(() => {
        async function loadPrescription() {
            try {
                const prescription = await api.get(`/prescriptions/${patient}`);
                setValue('description', prescription.data?.recipe);
                setId(prescription.data?.id);
            } catch (error) {
                console.log(error);
            }
        }

        loadPrescription();
    }, [patient]);

    const handleAddOrUpdatePrescription = async (data) => {
        let successMessage = '';
        if (id) {
            Keyboard.dismiss();
            await handleUpdatePrescription(data.description, patient, id);
            successMessage = 'Atualizado com sucesso!';
        } else {
            Keyboard.dismiss();
            await handlePrescription(data.description, patient);
            successMessage = 'Adicionado com sucesso!';
        }
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Mensagem',
            textBody: successMessage,
            autoClose: 2000
        });
    };

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter') {
            Keyboard.dismiss();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>
                </LinearGradient>
            </View>

            <View style={styles.bottom}>
                <View style={styles.rounded}>
                    <Image
                        source={{ uri: `${URL}/files/${photo}` }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.name}>{route.params.patient.name}</Text>
                <Text style={styles.patient}>Paciente</Text>

                <Controller
                    control={control}
                    name='description'
                    rules={{
                        minLength: 3,
                        maxLength: 120,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.textarea, { borderWidth: errors.description ? 2 : 2, borderColor: errors.description ? '#ff375b' : '#e0e0e0' }]}
                            placeholder='Descreva a receita'
                            multiline={true}
                            onKeyPress={handleKeyPress}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                 {errors.description && (
                        <Text style={styles.labelError}>Descrição é necessário</Text>
                    )}


                <Text style={styles.day}>{format(new Date(), 'dd MMM, yyyy', { locale: pt })}</Text>

                <View style={styles.areaButton}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.9}
                        onPress={handleSubmit((data) => handleAddOrUpdatePrescription(data))}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>{id ? 'Atualizar' : 'Adicionar'}</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
