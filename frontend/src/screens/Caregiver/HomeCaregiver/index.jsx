import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import SignOut from '../../../components/SignOut'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'
import * as Animatable from 'react-native-animatable';


export default function HomeCaregiver() {

    const navigation = useNavigation()
    const {user} = useContext(AuthContext)
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
                        <Text style={styles.span}>Cuidador</Text>
                    </View>
                    <View>
                        <Animatable.Image 
                            animation='fadeIn'
                            duration={2000}
                            source={require('../../../../assets/caregivers.png')}
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
                        onPress={() => navigation.navigate('ListMyDailyRoutinePatientCaregiver')}
                    >
                        <Fontisto name="prescription" style={styles.icon} />
                        <Text style={styles.text}>Rotina Diária</Text>
                        <FontAwesome5 name="heartbeat" style={styles.pulse} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('ListMyEventsPatientCaregiver')}
                    >
                        <FontAwesome5 name="calendar-alt" style={styles.icon} />
                        <Text style={styles.text}>Agenda/Consulta</Text>
                        <FontAwesome5 name="heartbeat" style={styles.pulse} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('ConditionalCardsCaregiver')}
                    >
                        <FontAwesome5 name="user-md" style={styles.icon} />
                        <Text style={styles.text}>Prontuário/Receita</Text>
                        <FontAwesome5 name="heartbeat" style={styles.pulse} />
                    </TouchableOpacity>
                </View>

                <View style={styles.areaButton}>
                    <SignOut />
                </View>
            </View>
        </View>
    )
}