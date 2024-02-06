import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, View } from "react-native";


import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Card from "../../../components/Card";
import SignOut from '../../../components/SignOut'

export default function HomeCaregiver() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.background}>
      <SignOut />
      <View style={styles.top}>
        <View style={styles.boxUser}>
          <FontAwesome5 name="user-nurse" style={styles.iconUser} />
        </View>
        <Text style={styles.namePatient}>Ana Maria Gomes</Text>
      </View>

      <View style={styles.bottom}>
        <Card title="Rotina Diária"
          onPress={() => navigation.navigate('ListMyDailyRoutinePatientCaregiver')}>
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>

        <Card title="Prontuários/Receitas" onPress={() => navigation.navigate('ConditionalCardsCaregiver')}>
          <Fontisto name="doctor" style={styles.cardIcon} />
        </Card>
        <Card title="Agenda/Consultas"
          onPress={() => navigation.navigate('ListMyEventsPatientCaregiver')}>
          <AntDesign name="calendar" style={styles.cardIcon} />
        </Card>
      </View>

    </SafeAreaView>
  );
}
