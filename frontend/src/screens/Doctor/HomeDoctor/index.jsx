import { SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeDoctor() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.boxUser}>
                    <FontAwesome5 name="user-alt" style={styles.iconUser} />
                </View>
                <Text style={styles.nameDoctor}>Ronaldo Ernani da Silva</Text>
                <Text style={styles.crmDoctor}>CRM: 10116</Text>

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

            </View>
        </SafeAreaView>
    )
}