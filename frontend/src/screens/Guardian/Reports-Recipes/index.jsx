import { SafeAreaView, View } from "react-native";
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import {MaterialCommunityIconsM} from '@expo/vector-icons';


export default function ReportsRecipes() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.boxCards}>

                <View style={styles.card}>
                    <MaterialCommunityIcons name="file-document-edit" style={styles.icon}/>
                    <Text style={styles.textCard}>Receitas</Text>
                </View>

                <View style={styles.card}>
                    <Entypo name="text-document" style={styles.icon} />
                    <Text style={styles.textCard}>Prontuários</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}