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
<<<<<<< HEAD

                <View style={styles.boxCards}>
                    <View style={styles.card}>
                        <MaterialCommunityIcons name="file-document-edit" style={styles.icon} />
                        <Text style={styles.textCard}>Receitas</Text>
                    </View>

                    <View style={styles.card}>
                        <Entypo name="text-document" style={styles.icon} />
                        <Text style={styles.textCard}>Prontuários</Text>
                    </View>
                </View>

=======
>>>>>>> f01639b1f7b3d6ba22a0be4e7056afefe1860fff
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