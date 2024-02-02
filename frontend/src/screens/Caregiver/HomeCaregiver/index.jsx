import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

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
        <Card title="Agenda"  onPress={() => navigation.navigate('NewEventCaregiver')}>
          <Entypo name="text-document" style={styles.cardIcon} />
        </Card>
      </View>

    </SafeAreaView>
  );
}
