import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { neutral, white } from '../../../constants/colors';
import Input from '../../../components/Input'
import * as ImagePicker from 'expo-image-picker';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../api';
import { Masks } from 'react-native-mask-input';
import { SelectList } from 'react-native-dropdown-select-list'

export default function NewPatientGuardian() {
    const { user } = useContext(AuthContext)
    const [caregivers, setCaregivers] = useState([]);
    const [selectedCaregiver, setSelectedCaregiver] = useState('')
    const [data, setData] = useState([])
    const [image, setImage] = useState(null);
    const [uri, setUri] = useState(null)
    const [loading, setLoading] = useState(false)

    const [inputs, setInputs] = useState({
        name: "",
        birth: "",
        user_id: user.id,
        caregiver_id: selectedCaregiver
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
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', inputs.name)
            formData.append('birth', inputs.birth)
            formData.append('user_id', inputs.user_id)
            formData.append('caregiver_id', selectedCaregiver)

            if (image) {
                const extend = image.split('.')[1]
                formData.append('avatar', JSON.parse(JSON.stringify({
                    name: image,
                    uri: uri,
                    type: `image/${extend}`
                })))
            }
            const response = await api.post('/patients', formData, {
                headers: { 'Accept': 'application/json', "content-type": 'multipart/form-data' }
            })
            setImage(null)
            setUri(null)
            setInputs({
                name: "",
                birth: "",
                user_id: user.id,
                caregiver_id: selectedCaregiver
            })
            console.log(formData)

            Alert.alert('Salvo com sucesso!')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        async function loadCaregiver() {
            try {
                const caregivers = await api.get(`/users/${3}`)
                let newArray = caregivers.data.map((item) => {
                    return {key: item.id, value: item.name}
                  })
                  
                  setData(newArray)
            } catch (error) {
                console.log(error)
            }
        }

        loadCaregiver()
    }, [])

    return (
        <View style={styles.container}>

            <KeyboardAvoidingView style={styles.content} behavior='padding'>

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

                <SelectList
                    boxStyles={{
                        marginVertical: 10
                    }}
                    setSelected={(val) => setSelectedCaregiver(val)}
                    data={data}
                    save="key"
                />

                <TouchableOpacity style={styles.submit} onPress={handlePatient}>
                    {loading ? (
                        <ActivityIndicator size={25} color={white} />
                    ) : (
                        <Text style={styles.submitText}>Cadastrar</Text>
                    )}
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}