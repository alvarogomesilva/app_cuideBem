import { SafeAreaView, Text, View } from "react-native";
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../../components/Card";


export default function ReportsRecipesCaregiver() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxCards}>
                
                <Card title="Receitas">
                    <MaterialCommunityIcons name="file-document-edit" style={styles.icon} />
                </Card>

                <Card title="Prontuários">
                    <Entypo name="text-document" style={styles.icon} />
                </Card>
    
            </View>
        </SafeAreaView>
    )
}