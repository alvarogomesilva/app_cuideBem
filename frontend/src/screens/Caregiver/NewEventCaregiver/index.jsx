import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Input from "../../../components/Input";
import SignOut from "../../../components/SignOut";
import Submit from "../../../components/Submit";
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export default function NewEventCaregiver() {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Novo Evento</Text>
                <Input placeholder={"Descrição"}>
                    <Octicons name="pencil" style={styles.icon} />
                </Input>
                <Input placeholder={"Data"}>
                    <Fontisto name="date" style={styles.icon} />
                </Input>
                <Input placeholder={"Horário"}>
                    <MaterialIcons name="access-time" style={styles.icon} />
                </Input>
                <View style={styles.smallerinput}>
                <Input placeholder={"Cor"}>
                </Input>
                </View>
                <Submit text={'Adicionar'}/>
            </View>
        </SafeAreaView>

    )
}