import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./styles";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import api from "../../../api";

export default function ConditionalPrescriptionsDoctor({ route }) {
  const navigation = useNavigation();

  const {
    id,
    name,
    title,
    inital_date,
    final_date,
    description,
    recipe,
  } = route.params.patientKey;

  const [inputs, setInputs] = useState({
    name,
    title,
    inital_date,
    final_date,
    description,
    recipe,
  });

  const updatePatient = async () => {
    try {
      await api.put('/prescriptions', {
        name: inputs.name,
        title: inputs.title,
        inital_date: inputs.inital_date,
        final_date: inputs.final_date,
        description: inputs.description,
        recipe: inputs.recipe,
        patient_id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const saveTimer = setTimeout(() => {
      updatePatient();
    }, 500);

    return () => clearTimeout(saveTimer);
  }, [updatePatient, inputs]);

  const RecordScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder="Titulo"
          value={inputs.title}
          onChangeText={(text) => setInputs({ ...inputs, title: text })}
        />
        <Input
          placeholder="Nome do paciente"
          defaultValue={name}
          editable={false}
        />
        <Input placeholder="Responsável" />

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
  );

  const RecipeScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Digite uma receita"
          multiline={true}
          style={styles.input}
          value={inputs.recipe}
          onChangeText={(text) => setInputs({ ...inputs, recipe: text })}
        />
      </View>
    </SafeAreaView>
  );

  return route.params.paramKey === 'NewRecord'
    ? RecordScreen()
    : RecipeScreen();
}