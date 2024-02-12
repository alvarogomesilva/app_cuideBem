import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Colors, { neutral, white } from '../../../constants/colors';
import Input from '../../../components/Input'
import * as ImagePicker from 'expo-image-picker';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext'
import api from '../../../api';
import MaskInput, { Masks } from 'react-native-mask-input';
import { SelectList } from 'react-native-dropdown-select-list'
import { LinearGradient } from "expo-linear-gradient";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";

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
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Mensagem',
                textBody: 'Adicionado com sucesso!',
                autoClose: 2000,

            })

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
                    return { key: item.id, value: item.name }
                })

                setData(newArray)
            } catch (error) {
                console.log(error)
            }
        }

        loadCaregiver()
    }, [])

    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>
                </LinearGradient>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.rounded} onPress={pickImage} activeOpacity={0.8}>
                    {image ? (
                        <Image source={{ uri: uri }} width={110} height={110} borderRadius={50} />
                    ) : (
                        <FontAwesome5 name="user-alt" size={50} color={Colors.octonary} />
                    )}
                </TouchableOpacity>

                <ScrollView>
                    <TextInput
                        style={styles.input}
                        placeholder='Descreva a receita'
                        editable={false}
                        value={user.name}

                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do paciente'
                        value={inputs.name}
                        onChangeText={(text) => setInputs({ ...inputs, name: text })}
                    />
                    <MaskInput
                        style={styles.input}
                        placeholder='Data de nascimento'
                        mask={Masks.DATE_DDMMYYYY}
                        value={inputs.birth}
                        onChangeText={(text) => setInputs({ ...inputs, birth: text })}
                        keyboardType="numeric"
                    />
                    <SelectList
                        boxStyles={styles.input}
                        setSelected={(val) => setSelectedCaregiver(val)}
                        data={data}
                        save="key"
                    />
                </ScrollView>

                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.button} onPress={handlePatient}>
                        {loading ? (
                            <ActivityIndicator size={25} color={Colors.white} />
                        ) : (
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}