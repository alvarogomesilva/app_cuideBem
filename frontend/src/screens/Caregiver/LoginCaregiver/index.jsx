import { styles } from './styles'

import { KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import Logo from '../../../components/Logo'
import Input from "../../../components/Input";
import Submit from "../../../components/Submit";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function LoginCaregiver() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, loadingAuth } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.container}
                start={[0.2, 1]}
                end={[0.8, 0.1]}
                colors={[ '#C4E1FF','#C4E1FF', '#FFF']}>
                <Logo />
                <KeyboardAvoidingView style={styles.content} behavior="padding">

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
                    />
                </KeyboardAvoidingView>
            </LinearGradient>
        </View>

    )
}

