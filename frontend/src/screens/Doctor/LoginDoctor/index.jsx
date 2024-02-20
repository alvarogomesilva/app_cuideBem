import { styles } from './styles'

import { ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Informe o email'),
    password: yup.string().min(3, 'A senha precisa ter no minímo 3 caracteres').required('Informe a senha')
})

export default function LoginDoctor() {
    const { control, handleSubmit, formState: { errors } } = useForm(({ resolver: yupResolver(schema) }))
    const { signInDoctor, loadingAuth } = useContext(AuthContext)

    const handleSignIn = async (data) => {
        await signInDoctor(data.email, data.password)
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios'? 'padding': null}>
            <LinearGradient
                colors={['#ADCAE8', '#B8D5F3', '#C4E1FF', '#FFFFFF']}
                style={styles.gradient}>

                <SafeAreaView style={styles.safeAreaView}>
                    <Animatable.Image
                        animation="flipInY"
                        duration={2000}
                        source={require('../../../../assets/doctorsHome.png')}
                        style={styles.image}
                    />

                </SafeAreaView>
            </LinearGradient>

            <View style={styles.content}>
                <Animatable.View style={styles.content} animation='fadeInUp'>
                    <Text style={styles.title}>Médicos</Text>
                    <View style={styles.boxInputs}>

                        <Controller
                            control={control}
                            name='email'
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.box}>
                                    <TextInput
                                        value={value}
                                        style={[styles.input,
                                        { borderWidth: errors.email ? 2 : 2, borderColor: errors.email ? '#ff375b' : '#e0e0e0' }
                                        ]}
                                        placeholder='Digite seu email'
                                        onChangeText={onChange}
                                        autoCapitalize='none'
                                    />
                                    <Feather name="mail" style={[styles.icon, { color: errors.email ? '#ff375b' : '#e0e0e0' }]} />
                                </View>
                            )}
                        />
                        {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

                        <Controller
                            control={control}
                            name='password'
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.box}>
                                    <TextInput
                                        value={value}
                                        style={[styles.input,
                                        { borderWidth: errors.password ? 2 : 2, borderColor: errors.password ? '#ff375b' : '#e0e0e0' }
                                        ]}
                                        placeholder='Digite sua senha'
                                        onChangeText={onChange}
                                        secureTextEntry={true}
                                    />
                                    <Feather name="lock" style={[styles.icon, { color: errors.password ? '#ff375b' : '#e0e0e0' }]} />
                                </View>
                            )}
                        />
                        {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

                        <TouchableOpacity style={styles.submit} activeOpacity={0.9} onPress={handleSubmit(handleSignIn)}>
                            {
                                loadingAuth ? (<ActivityIndicator color="#fff" size="small" />) : (<Text style={styles.submitText}>Entrar</Text>)
                            }
                        </TouchableOpacity>
                    </View>
                </Animatable.View>


            </View>
        </KeyboardAvoidingView>
    )
}