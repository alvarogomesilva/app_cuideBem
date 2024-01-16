import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function NewRevenues() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Receita do paciente</Text>

        <TextInput
          placeholder="Digite uma receita"
          multiline={true}
          style={styles.input}
        />

      </View>
    </SafeAreaView>
  );
}