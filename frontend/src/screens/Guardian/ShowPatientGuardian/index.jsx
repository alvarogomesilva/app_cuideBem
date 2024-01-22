import { SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Input from "../../../components/Input";
import { useState } from "react";
import { Fontisto } from '@expo/vector-icons';
import TextArea from "../../../components/TextArea";


export default function ShowPatientGuardian({ route }) {

  const [inputs, setInputs] = useState({
    name: "",
    title: "",
    inital_date: "",
    final_date: "",
    description: "",
    recipe: "",
  });


  if (route.params.paramKey === 'Prontuários') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Prontuário do paciente</Text>

        <View style={styles.content}>
          <Input
            placeholder="Titulo"
            value={inputs.title}
            onChangeText={(text) => setInputs({ ...inputs, title: text })}
          />
          <Input
            placeholder="Nome do paciente"
            value={inputs.name}

          />
          <Input
            placeholder="Responsável"
          />

          <View style={styles.dates}>
            <Input
              placeholder="Data Inicial    "
              value={inputs.inital_date}
              onChangeText={(text) => setInputs({ ...inputs, inital_date: text })}
            >
              <Fontisto name="date" style={styles.icon} />

            </Input>

            <Input
              placeholder="Data Final      "
              value={inputs.final_date}
              onChangeText={(text) => setInputs({ ...inputs, final_date: text })}
            >
              <Fontisto name="date" style={styles.icon} />
            </Input>
          </View>

          <TextArea
            placeholder="Descrição"
            height={100}
            multiline={true}
            numberOfLines={3}
            value={inputs.description}
            onChangeText={(text) => setInputs({ ...inputs, description: text })}
          />

        </View>

      </SafeAreaView>
    )
  } else if (route.params.paramKey === 'Receitas') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Receita do paciente</Text>

          <TextInput
            placeholder="Digite uma receita"
            multiline={true}
            style={styles.input}
            value={inputs.recipe}
            onChangeText={(text) => setInputs({ ...inputs, recipe: text })}
          />

        </View>
      </SafeAreaView>
    )
  } else {
    return (
      <Text>Tela de edição do paciente</Text>
    )
  }


}
