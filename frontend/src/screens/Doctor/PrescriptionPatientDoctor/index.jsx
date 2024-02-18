import React, { useState, useEffect } from 'react';
import { View, Keyboard, TextInput, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { usePrescription } from '../../../hooks/doctors/usePrescription';
import api from '../../../api';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { format } from 'date-fns'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { pt } from 'date-fns/locale'

export default function PrescriptionPatientDoctor({ route }) {
    const navigation = useNavigation();

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

    const handleAddOrUpdatePrescription = async () => {
        if (id) {
            Keyboard.dismiss();
            await handleUpdatePrescription(input, patient, id);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Mensagem',
                textBody: 'Atualizado com sucesso!',
                autoClose: 2000,

            })
        } else {
            Keyboard.dismiss();
            await handlePrescription(input, patient);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Mensagem',
                textBody: 'Adicionado com sucesso!',
                autoClose: 2000
            })
        }

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
                        source={{ uri: `http://192.168.0.100:3000/files/${photo}` }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.name}>{route.params.patient.name}</Text>
                <Text style={styles.patient}>Paciente</Text>

                <TextInput
                    style={styles.textarea}
                    placeholder='Descreva a receita'
                    multiline={true}
                    onKeyPress={handleKeyPress}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />

                <Text style={styles.day}>{format(new Date(), 'dd MMM, yyyy', { locale: pt })
                }</Text>

                <View style={styles.areaButton}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.9}
                        onPress={handleAddOrUpdatePrescription}
                    >
                        {loading ? (
                            <ActivityIndicator size="large" color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>{id ? 'Atualizar' : 'Adicionar'}</Text>
                        )}

                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}
