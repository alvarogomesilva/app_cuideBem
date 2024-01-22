import { SafeAreaView, Text, View } from "react-native";
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../../components/Card";
import { useNavigation } from '@react-navigation/native'

export default function ReportsRecipesGuardian() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxCards}>
                
                <Card 
                    title="Receitas" 
                    onPress={() => navigation.navigate('ListPatientsGuardian', 
                    { paramKey: 'Receitas' })}
                >
                    <MaterialCommunityIcons name="file-document-edit" style={styles.icon} />
                </Card>

                <Card 
                    title="Prontuários" 
                    onPress={() => navigation.navigate('ListPatientsGuardian', 
                    {paramKey: 'Prontuários'})}
                >
                    <Entypo name="text-document" style={styles.icon} />
                </Card>
    
            </View>
        </SafeAreaView>
    )
}