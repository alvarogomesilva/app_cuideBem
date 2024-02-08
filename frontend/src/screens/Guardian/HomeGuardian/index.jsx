import styles from './styles';
import { useNavigation } from '@react-navigation/native'

import { SafeAreaView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import Card from "../../../components/Card";
import SignOut from '../../../components/SignOut';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';


export default function HomeGuardian() {
    const navigation = useNavigation()
    const {user} = useContext(AuthContext)
    return (
        <SafeAreaView style={styles.background}>
            <SignOut />
            <View style={styles.top}>
                <View style={styles.boxUser}>
                    <FontAwesome5 name="user-shield" style={styles.iconUser} />
                </View>

                <Text style={styles.namePatient}>{user.name}</Text>
                <Text>Data de Nascimento: 09/07/1943</Text>
            </View>

            <View style={styles.bottom}>

                <Card title="Pacientes" onPress={() => navigation.navigate("ListMyPatientsGuardian", { newPatient: true })}>
                    <FontAwesome5 name="user-friends" style={styles.cardIcon} />
                </Card>

                <Card title="Rotina Diária" onPress={() => navigation.navigate('ListMyDailyRoutinePatientGuardian')}>
                    <Entypo name="text-document" style={styles.cardIcon} />
                </Card>

                <Card title="Prontuário/Receita" onPress={() => navigation.navigate('ConditionalCardsGuardian')}>
                    <Fontisto name="doctor" style={styles.cardIcon} />
                </Card>

                <Card title="Agenda/Consultas" onPress={() => navigation.navigate('ListMyEventsPatientGuardian')}>
                    <AntDesign name="calendar" style={styles.cardIcon} />
                </Card>
            </View>


        </SafeAreaView>
    )
}