import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text, View } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Card from "../../../components/Card";


export default function HomeCaregiver() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <View style={styles.boxUser}>
          <FontAwesome5 name="user-alt" style={styles.iconUser} />
        </View>

        <Text style={styles.namePatient}>Ana Maria Gomes</Text>
      </View>

      <View style={styles.bottom}>

        <Card title="Rotina Diária">
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>

        <Card title="Prontuários/Receitas"  onPress={() => navigation.navigate('ReportsRecipesCaregiver')}>
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>
        <Card title="Agenda">
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>

      </View>

    </SafeAreaView>
  );
}
