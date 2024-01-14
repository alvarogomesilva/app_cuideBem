import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { neutral } from '../../../constants/colors';
import Input from '../../../components/Input'
import * as ImagePicker from 'expo-image-picker';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../api';

export default function NewPatientGuardian() {
    const { user } = useContext(AuthContext)

    const [image, setImage] = useState(null);
    const [uri, setUri] = useState(null)
    const [inputs, setInputs] = useState({
        name: "",
        birth: "",
        user_id: user.id
    })

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
        try {
            const formData = new FormData()
            formData.append('name', inputs.name)
            formData.append('birth', inputs.birth)
            formData.append('user_id', inputs.user_id)
            const extend = image.split('.')[1]
            formData.append('avatar', JSON.parse(JSON.stringify({
                name: image,
                uri: uri,
                type: `image/${extend}`
            })))

            const response = await api.post('/patient', formData, {
                headers: { 'Accept': 'application/json', "content-type": 'multipart/form-data' }
            })
            setImage(null)
            setUri(null)
            setInputs({
                name: "",
                birth: "",
                user_id: user.id
            })

            Alert.alert('Salvo com sucesso!')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <View style={styles.avatar}>
                    {image ? (
                        <Image source={{ uri: uri }} width={80} height={80} borderRadius={40} />
                    ) : (
                        <FontAwesome5 name="user-alt" size={40} color={neutral} />
                    )}
                </View>

                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text>Adicionar foto</Text>
                </TouchableOpacity>

                <Input
                    placeholder="Nome do paciente"
                    value={inputs.name}
                    onChangeText={(text) => setInputs({ ...inputs, name: text })}
                />
                <Input
                    placeholder="Data de nascimento"
                    value={inputs.birth}
                    onChangeText={(text) => setInputs({ ...inputs, birth: text })}
                />
                <Input
                    placeholder="Nome do guardião"
                    value={user.name}
                />

                <TouchableOpacity style={styles.submit} onPress={handlePatient}>
                    <Text style={styles.submitText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}