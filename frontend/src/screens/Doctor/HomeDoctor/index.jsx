import { styles } from './styles';
import { SafeAreaView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Card from '../../../components/Card';

export default function HomeDoctor() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.boxUser}>
                    <FontAwesome5 name="user-alt" style={styles.iconUser} />
                </View>
                <Text style={styles.nameDoctor}>Ronaldo Ernani da Silva</Text>
                <Text style={styles.crmDoctor}>CRM: 10116</Text>

            </View>

            <View style={styles.bottom}>

                <Card title='Prontuário'>
                    <Entypo name="text-document-inverted" style={styles.cardIcon} />
                </Card>

                <Card title='Receita'>
                    <Entypo name="text-document" style={styles.cardIcon} />
                </Card>
            </View>


        </SafeAreaView>
    )
}