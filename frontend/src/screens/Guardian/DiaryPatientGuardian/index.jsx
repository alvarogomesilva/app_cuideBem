import { Text, View } from 'react-native'
import ButtonBottom from '../../../components/ButtonBottom'
import { styles } from './styles'
import { useNavigation} from '@react-navigation/native'

export default function DiaryPatientGuardian() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Tela de Listagem da agenda</Text>

            <ButtonBottom onPress={() => navigation.navigate('NewDiaryPatientGuardian')}/>
        </View>
    )
}