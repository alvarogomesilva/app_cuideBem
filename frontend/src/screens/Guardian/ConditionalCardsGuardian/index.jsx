import { SafeAreaView, Text, View } from "react-native";
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../../../components/Card";
import { useNavigation } from '@react-navigation/native'
import { useEffect } from "react";

export default function ConditionalCardsGuardian() {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: 'Prontuários e Receitas',
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxCards}>
                
                <Card 
                    title="Prontuários" 
                    onPress={() => navigation.navigate('ListMyRecordsPatientGuardian', 
                    {paramKey: 'Prontuários', newPatient: false})}
                >
                    <Entypo name="text-document" style={styles.icon} />
                </Card>
                <Card 
                    title="Receitas" 
                    onPress={() => navigation.navigate('ListMyPrescriptionsPatientGuardian', 
                    { paramKey: 'Receitas', newPatient: false })}
                >
                    <MaterialCommunityIcons name="file-document-edit" style={styles.icon} />
                </Card>
    
            </View>
        </SafeAreaView>
    )
}