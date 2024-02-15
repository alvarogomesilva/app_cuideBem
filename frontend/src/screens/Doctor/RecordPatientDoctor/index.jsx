import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, Image, Keyboard, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useRecord } from "../../../hooks/doctors/useRecord";
import api from "../../../api";
import { LinearGradient } from "expo-linear-gradient";
import { format } from 'date-fns'
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import { MaterialIcons } from '@expo/vector-icons';
import { pt } from 'date-fns/locale'
import { useNavigation } from "@react-navigation/native";

export default function RecordPatientDoctor({ route }) {
    const navigation = useNavigation()
    const { handleRecord, handleUpdateRecord, loading } = useRecord();
    const [patient, setPatient] = useState(route.params.patient.id);
    const [photo, setPhoto] = useState(route.params.patient.photo)
    const [id, setId] = useState('');
    const [inputs, setInputs] = useState({
        title: '',
        initial_date: '',
        final_date: '',
        description: '',
        patient_id: patient
    });

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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

    const handleAddOrUpdateRecord = async () => {
        try {
            if (id) {
                await handleUpdateRecord(inputs, id);
                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Mensagem',
                    textBody: 'Atualizado com sucesso!',
                    autoClose: 2000,

                })
            } else {
                await handleRecord(inputs);
                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Mensagem',
                    textBody: 'Adicionado com sucesso!',
                    autoClose: 2000
                })
            }

        } catch (error) {
            console.log(error);
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
                setInputs({ title, description });
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
                    <SafeAreaView>
                        <Pressable onPress={() => navigation.goBack()}>
                            <MaterialIcons
                                name="arrow-back-ios"
                                style={styles.back} />
                        </Pressable>

                    </SafeAreaView>

                </LinearGradient>
            </View>

            <View style={styles.bottom}>
                <View style={styles.rounded}>
                    <Image
                        source={{ uri: `http://192.168.0.100:3000/files/${photo}` }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.name}>{route.params.patient.name}</Text>
                <Text style={styles.patient}>Paciente</Text>

                <ScrollView>
                    <TextInput
                        value={inputs.title}
                        placeholder='Descreva o titulo'
                        style={styles.input}
                        onChangeText={(text) => setInputs({ ...inputs, title: text })}
                    />
                    <TextInput
                        style={styles.textarea}
                        placeholder='Descreva a receita'
                        multiline={true}
                        onKeyPress={handleKeyPress}
                        value={inputs.description}
                        onChangeText={(text) => setInputs({ ...inputs, description: text })}
                    />
                    <Text
                        style={styles.day}>
                        {format(new Date(), 'dd MMM, yyyy', { locale: pt })}
                    </Text>
                </ScrollView>

                <Animated.View style={[styles.areaButton, { opacity: fadeAnim }]}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.9}
                        onPress={handleAddOrUpdateRecord}
                    >
                        {loading ? (
                            <ActivityIndicator size="large" color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>{id ? 'Atualizar' : 'Adicionar'}</Text>
                        )}
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}
