import { styles } from './styles'

import { KeyboardAvoidingView, SafeAreaView, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import Logo from '../../../components/Logo'
import Input from "../../../components/Input";
import Submit from "../../../components/Submit";

export default function LoginCaregiver() {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                style={styles.container}
                start={[0.2, 1]}
                end={[0.8, 0.1]}
                colors={['#607C99', '#C4E1FF', '#FFF']}
            >
                <Logo />

                <Text style={styles.title}>Acessar</Text>

                <KeyboardAvoidingView style={styles.content} behavior="padding">

                    <Input placeholder='Digite seu email' autoCapitalize='none'>
                        <Feather name="mail" style={styles.icon} />
                    </Input>

                    <Input placeholder='Digite sua senha'>
                        <Feather name="lock" style={styles.icon} />
                    </Input>

                    <Submit />
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>

    )
}

