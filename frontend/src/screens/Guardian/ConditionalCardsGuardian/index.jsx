import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import Card from "../../../components/Card";
import { useNavigation } from '@react-navigation/native'
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ConditionalCardsGuardian() {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>

                    <Text style={styles.title}>Prontuários e Receitas</Text>

                </LinearGradient>
            </View>

            <View style={styles.content}>
                <View style={styles.cards}>
                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('ListMyRecordsPatientGuardian')}
                    >
                        <MaterialCommunityIcons name="ballot-recount-outline" style={styles.icon} />


                        <Text style={styles.text}>Prontuários</Text>
                        <FontAwesome5 name="heartbeat" style={styles.pulse} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('ListMyPrescriptionsPatientGuardian')}
                    >
                        <Fontisto name="prescription" style={styles.icon} />
                        <Text style={styles.text}>Receitas</Text>
                        <FontAwesome5 name="heartbeat" style={styles.pulse} />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}