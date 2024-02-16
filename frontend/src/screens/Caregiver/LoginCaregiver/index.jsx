import { styles } from './styles'

import { Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import Logo from '../../../components/Logo'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function LoginCaregiver() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, loadingAuth } = useContext(AuthContext)

    return (
      
            <View style={styles.container}>
                <LinearGradient
                    colors={['#ADCAE8', '#B8D5F3', '#C4E1FF', '#FFFFFF']}
                    style={styles.gradient}>

                    <SafeAreaView style={styles.safeAreaView}>
                        <Image
                            source={require('../../../../assets/caregivers.png')}
                            style={styles.image}
                        />

                    </SafeAreaView>
                </LinearGradient>

                <View style={styles.content}>
                    <Text style={styles.title}>Cuidadores</Text>
                    <View style={styles.boxInputs}>
                        <View style={styles.box}>
                            <TextInput
                                style={styles.input}
                                placeholder='Digite seu email'
                            />
                            <Feather name="mail" style={styles.icon} />
                        </View>
                        <View style={styles.box}>
                            <TextInput
                                style={styles.input}
                                placeholder='Digite sua senha'
                            />
                            <Feather name="lock" style={styles.icon} />
                        </View>

                        <TouchableOpacity style={styles.submit} activeOpacity={0.9}>
                            <Text style={styles.submitText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}

{/* <View style={styles.container}>
<LinearGradient
    style={styles.container}
    start={[0.2, 1]}
    end={[0.8, 0.1]}
    colors={[ '#C4E1FF','#C4E1FF', '#FFF']}>
    <Logo />
    <KeyboardAvoidingView style={styles.content} behavior={Platform.OS === 'ios' ? 'padding': ''}>

        <Input 
            placeholder='Digite seu email' 
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
        >
            <Feather name="mail" style={styles.icon} />
        </Input>

        <Input 
            placeholder='Digite sua senha'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        >
            <Feather name="lock" style={styles.icon} />
        </Input>

        <Submit 
            loadingAuth={loadingAuth}
            onPress={() => signIn(email, password)}
            text='Login'
        />
    </KeyboardAvoidingView>
</LinearGradient>
</View> */}

