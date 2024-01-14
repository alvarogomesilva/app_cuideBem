import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function ListPatientsGuardian() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pacientes</Text>

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={() => navigation.navigate('NewPatientGuardian')}
                >
                <Entypo name="plus" size={30} color="#FFF" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}