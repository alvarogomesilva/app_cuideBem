import styles from "./styles";

import { SafeAreaView, Text, View } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Card from "../../../components/Card";


export default function HomeCaregiver() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <View style={styles.boxUser}>
          <FontAwesome5 name="user-alt" style={styles.iconUser} />
        </View>

        <Text style={styles.namePatient}>Ana Maria Gomes</Text>
      </View>

      <View style={styles.bottom}>

        <Card title="Rotina Diária/CheckList">
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>

        <Card title="Prontuário/Receita">
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>
        <Card title="Agenda/Consultas">
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>

      </View>

    </SafeAreaView>
  );
}
