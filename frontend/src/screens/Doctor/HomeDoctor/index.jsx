import { styles } from './styles';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Card from '../../../components/Card';
import { useNavigation } from '@react-navigation/native'
import SignOut from '../../../components/SignOut'
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function HomeDoctor() {
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)
    return (
        <SafeAreaView style={styles.container}>
            <SignOut />
            <View style={styles.top}>
                <View style={styles.boxUser}>
                    <FontAwesome5 name="user-md" style={styles.iconUser}  />
                </View>
                <Text style={styles.nameDoctor}>{user.name}</Text>
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
                <Image 
                    source={require('../../../../assets/doctors.png')}
                    
                />
            </View>


        </SafeAreaView>
    )
}