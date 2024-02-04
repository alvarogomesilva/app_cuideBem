import { styles } from './styles';
import { SafeAreaView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Card from '../../../components/Card';
import { useNavigation } from '@react-navigation/native'
import SignOut from '../../../components/SignOut'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function HomeDoctor() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <SignOut />
            <View style={styles.top}>
                <View style={styles.boxUser}>
                    <FontAwesome5 name="user-md" style={styles.iconUser}  />
                </View>
                <Text style={styles.nameDoctor}>Ronaldo Ernani da Silva</Text>
                <Text style={styles.crmDoctor}>CRM: 10116</Text>

            </View>
            <View style={styles.bottom}>

                <Card
                    title='Prontuários'
                    onPress={() => navigation.navigate('ListRecordsPatientsDoctor')}>
                    <Entypo name="text-document-inverted" style={styles.cardIcon} />
                </Card>

                <Card
                    title='Receitas'
                    onPress={() => navigation.navigate('ListPrescriptionsPatientsDoctor')}>
                    <Entypo name="text-document" style={styles.cardIcon} />
                </Card>
            </View>


        </SafeAreaView>
    )
}