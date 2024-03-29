import { styles } from './styles';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import SignOut from '../../../components/SignOut'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function HomeDoctor() {
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)
    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#809DBB', '#8BA8C6', '#96B3D1', '#FFFFFF']}
                style={styles.gradient}>

                <SafeAreaView style={styles.top}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.title}>Olá,</Text>
                        </View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.span}>Médico</Text>
                    </View>
                    <View>
                        <Animatable.Image
                            animation='fadeIn'
                            source={require('../../../../assets/doctorsHome.png')}
                            style={{ width: 130, height: 130 }}

                        />
                    </View>

                </SafeAreaView>
            </LinearGradient>

            <View style={styles.bottom}>
                <View style={styles.cards}>
                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('ListRecordsPatientsDoctor')}
                    >
                        <MaterialCommunityIcons name="ballot-recount-outline" style={styles.icon} />
                        <Text style={styles.text}>Prontuários</Text>
                        <Fontisto name="heartbeat-alt" style={styles.pulse} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('ListPrescriptionsPatientsDoctor')}
                    >
                        <Fontisto name="prescription" style={styles.icon} />
                        <Text style={styles.text}>Receitas</Text>
                        <Fontisto name="heartbeat-alt" style={styles.pulse} />
                    </TouchableOpacity>
                </View>

                <View style={styles.areaButton}>
                    <SignOut />
                </View>
            </View>
        </View>
    )
}