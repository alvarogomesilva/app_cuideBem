import styles from './styles';
import { useNavigation } from '@react-navigation/native'

import { Button, SafeAreaView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import Card from "../../../components/Card";


export default function HomeGuardian() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.top}>
                <View style={styles.boxUser}>
                    <FontAwesome5 name="user-alt" style={styles.iconUser} />
                </View>

                <Text style={styles.namePatient}>Ulda Zabel Reis</Text>
                <Text>Data de Nascimento: 09/07/1943</Text>
            </View>

            <View style={styles.bottom}>

                <Card title="Pacientes">
                    <FontAwesome5 name="user-friends" style={styles.cardIcon} />
                </Card>

                <Card title="Rotina Diária">
                    <Entypo name="text-document" style={styles.cardIcon} />
                </Card>

                <Card title="Prontuário/Receita" onPress={() => navigation.navigate('ReportsRecipesGuardian')}>
                    <Fontisto name="doctor" style={styles.cardIcon} />
                </Card>

                <Card title="Agenda/Consultas" >
                    <AntDesign name="calendar" style={styles.cardIcon} />
                </Card>

            </View>

        </SafeAreaView>
    )
}