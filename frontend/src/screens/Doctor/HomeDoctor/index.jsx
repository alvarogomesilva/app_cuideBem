import { styles } from './styles';
import { SafeAreaView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Card from '../../../components/Card';
import { useNavigation } from '@react-navigation/native'
import SignOut from '../../../components/SignOut'
import { Fontisto } from '@expo/vector-icons';

export default function HomeDoctor() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <SignOut />
            <View style={styles.top}>
                <View style={styles.boxUser}>
                    <Fontisto name="doctor" style={styles.iconUser} />
                </View>
                <Text style={styles.nameDoctor}>Ronaldo Ernani da Silva</Text>
                <Text style={styles.crmDoctor}>CRM: 10116</Text>

            </View>
            <View style={styles.bottom}>

                <Card
                    title='Prontuário'
                    onPress={() => navigation.navigate('ConditionalCardsDoctor',
                        { paramKey: 'Record' })}>
                    <Entypo name="text-document-inverted" style={styles.cardIcon} />
                </Card>

                <Card
                    title='Receita'
                    onPress={() => navigation.navigate('ConditionalCardsDoctor',
                        { paramKey: 'Recipes' })}>
                    <Entypo name="text-document" style={styles.cardIcon} />
                </Card>
            </View>


        </SafeAreaView>
    )
}