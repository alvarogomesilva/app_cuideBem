import { styles } from "./styles";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from '../../../components/Input'
import TextArea from "../../../components/TextArea";
import { Fontisto } from '@expo/vector-icons';

export default function NewRecord() {
  return (
    // <SafeAreaView style={styles.background}>
    //   <Text style={styles.text}>Novo Registo</Text>
    //   <View style={styles.title}><TextInput placeholder="Titulo" style={styles.holders}></TextInput></View>
    //   <View style={styles.name}><TextInput placeholder="Nome do paciente" style={styles.holders}></TextInput></View>
    //   <View style={styles.accountable}><TextInput placeholder="Responsável" style={styles.holders}></TextInput></View>
    //   <View style={styles.contdate}>
    //     <View style={styles.date}></View>
    //     <View style={styles.date}></View>
    //   </View>
    //   <View style={styles.Description}><TextInput placeholder="Descrição" style={styles.holders}></TextInput></View>
    //   <TouchableOpacity style={styles.button}>
    //     <Text style={styles.textbutton}>Adicionar</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

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
}
