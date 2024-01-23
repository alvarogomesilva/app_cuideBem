import { ActivityIndicator, Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Input from "../../../components/Input";
import { useContext, useState } from "react";
import { Fontisto } from '@expo/vector-icons';
import TextArea from "../../../components/TextArea";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { neutral, white } from '../../../constants/colors';
import { Masks } from 'react-native-mask-input';
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../api";


export default function ShowPatientGuardian({ route }) {
  const { id, name, birth, photo, title, inital_date, final_date, description, recipe } = route.params.patient;
  const [image, setImage] = useState(photo)
  const [uri, setUri] = useState(`http://10.3.18.71:3000/files/${photo}`)

  const [loading, setLoading] = useState(false)

  const [inputs, setInputs] = useState({
    id,
    name,
    title,
    photo,
    birth,
    inital_date,
    final_date,
    description,
    recipe,
  });
  const { user } = useContext(AuthContext)


  // ============================================================

  const pickImage = async () => {

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert('Permissão necessária', 'Permita que sua aplicação acesse imagens')
    } else {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: false,
        aspect: [4, 4],
        quality: 1
      });

      if (canceled) {
        Alert.alert('Operação cancelada');
      } else {

        const filename = assets[0].uri.substring(assets[0].uri.lastIndexOf('/') + 1, assets[0].uri.length)
        setImage(filename)
        setUri(assets[0].uri)
      }
    }
  };

  const handlePatient = async () => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', inputs.name)
      formData.append('birth', inputs.birth)

      if (image) {
        const extend = image.split('.')[1]
        formData.append('avatar', JSON.parse(JSON.stringify({
            name: image,
            uri: uri,
            type: `image/${extend}`
        })))
    }

      const response = await api.put(`/patients/${inputs.id}`, formData, { 
        headers: { 'Accept': 'application/json', "content-type": 'multipart/form-data' }
        })

      Alert.alert('Atualizado com sucesso!')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


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
      <SafeAreaView style={styles.container}>

        <View style={styles.content}>

          <TouchableOpacity style={styles.avatar} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: uri }} width={100} height={100} borderRadius={50} />
            ) : (
              <FontAwesome5 name="user-alt" size={50} color={neutral} />
            )}
          </TouchableOpacity>

          <Input
            placeholder="Nome do paciente"
            value={inputs.name}
            onChangeText={(text) => setInputs({ ...inputs, name: text })}
          >
            <FontAwesome5 name="user-injured" style={styles.icon} />
          </Input>

          <Input
            placeholder="Data de nascimento"
            value={inputs.birth}
            mask={Masks.DATE_DDMMYYYY}
            onChangeText={(text) => setInputs({ ...inputs, birth: text })}
            keyboardType="numeric"
          >
            <FontAwesome5 name="birthday-cake" style={styles.icon} />
          </Input>


          <Input
            placeholder="Nome do guardião"
            value={user.name}
          >
            <FontAwesome5 name="user-shield" style={styles.icon} />
          </Input>

          <TouchableOpacity style={styles.submit} onPress={handlePatient}>
            {loading ? (
              <ActivityIndicator size={25} color={white} />
            ) : (
              <Text style={styles.submitText}>Atualizar</Text>
            )}
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  }
}
