import { ActivityIndicator, Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { neutral, white } from '../../../constants/colors';
import Input from '../../../components/Input'
import * as ImagePicker from 'expo-image-picker';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../api';
import { Masks } from 'react-native-mask-input';

export default function NewPatientGuardian() {
    const { user } = useContext(AuthContext)

    const [image, setImage] = useState(null);
    const [uri, setUri] = useState(null)
    const [inputs, setInputs] = useState({
        name: "",
        birth: "",
        user_id: user.id
    })
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')
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
            formData.append('user_id', inputs.user_id)

            if (image) {
                const extend = image.split('.')[1]
                formData.append('avatar', JSON.parse(JSON.stringify({
                    name: image,
                    uri: uri,
                    type: `image/${extend}`
                })))
            }

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
        } finally {
            setLoading(false)
        }
    }

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
                        <ActivityIndicator size={25} color={white}/>
                    ) : (
                        <Text style={styles.submitText}>Cadastrar</Text>
                    )}
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}