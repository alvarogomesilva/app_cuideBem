import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useRecord } from "../../../hooks/doctors/useRecord";
import api from "../../../api";
import { LinearGradient } from "expo-linear-gradient";
import { format } from 'date-fns'
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import { pt } from 'date-fns/locale'
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../../../validations/recordValidation"

export default function RecordPatientDoctor({ route }) {
    const [patient, setPatient] = useState(route.params.patient.id);

    const { control, handleSubmit, formState: { errors }, setValue } = useForm((
        {
            resolver: yupResolver(schema), defaultValues: {
                title: '',
                description: '',
                patient_id: patient
            }
        }))

    const navigation = useNavigation()
    const { handleRecord, handleUpdateRecord, loading } = useRecord();
    const [photo, setPhoto] = useState(route.params.patient.photo)
    const [id, setId] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [showError, setShowError] = useState(false);

    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity value

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }
                ).start();
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ).start();
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleAddOrUpdateRecord = async (data) => {
        try {
            if (id) {
                await handleUpdateRecord(data, id);
                setShowError(false);
                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Mensagem',
                    textBody: 'Atualizado com sucesso!',
                    autoClose: 2000,
                });
            } else {
                await handleRecord(data);
                setShowError(false);
                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Mensagem',
                    textBody: 'Adicionado com sucesso!',
                    autoClose: 2000
                });
            }

        } catch (error) {
            console.log(error);
            setShowError(true);
        }
    };

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter') {
            Keyboard.dismiss();
        }
    };

    useEffect(() => {
        async function loadPrescription() {
            try {
                const record = await api.get(`/records/${patient}`);
                const { title, description } = record.data
                setValue("title", title)
                setValue("description", description)
                setId(record.data.id);
            } catch (error) {
                console.log(error);
            }
        }

        loadPrescription();
    }, [patient]);

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
                        source={{ uri: `http://10.3.18.71:3000/files/${photo}` }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.name}>{route.params.patient.name}</Text>
                <Text style={styles.patient}>Paciente</Text>

                <ScrollView >

                    <Controller
                        control={control}
                        rules={{
                            minLength: 3,
                            maxLength: 120,
                          }}
                  
                        name='title'
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Descreva um titulo'
                                style={styles.input}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.title && (
                        <Text style={styles.labelError}>Titulo é necessário</Text>
                    )}

                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.textarea}
                                placeholder='Descreva o prontuário'
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

                    <Text
                        style={styles.day}>
                        {format(new Date(), 'dd MMM, yyyy', { locale: pt })}
                    </Text>
                </ScrollView>

                <Animated.View style={[styles.areaButton, { opacity: fadeAnim }]}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.9}
                        onPress={handleSubmit(handleAddOrUpdateRecord)}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>{id ? 'Atualizar' : 'Adicionar'}</Text>
                        )}
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}
