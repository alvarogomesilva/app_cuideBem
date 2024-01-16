import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { Fontisto } from '@expo/vector-icons';

export default function NewRecipesRecord({ route }) {

  if (route.params.paramKey === 'NewRecord') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Prontuário do paciente</Text>

        <View style={styles.content}>
          <Input
            placeholder="Titulo"
          />
          <Input
            placeholder="Nome do paciente"
          />
          <Input
            placeholder="Responsável"
          />

          <View style={styles.dates}>
            <Input
              placeholder="Data Inicial    "
            >
              <Fontisto name="date" style={styles.icon} />

            </Input>

            <Input
              placeholder="Data Final      "
            >
              <Fontisto name="date" style={styles.icon} />
            </Input>
          </View>

          <TextArea
            placeholder="Descrição"
            height={100}
            multiline={true}
            numberOfLines={3}

          />

        </View>

      </SafeAreaView>
    );
  } else {
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


}