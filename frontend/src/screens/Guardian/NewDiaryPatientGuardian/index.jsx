import { View, Text } from 'react-native'
import { styles } from './styles'
import Input from '../../../components/Input'
import Submit from '../../../components/Submit'

export default function NewDiaryPatientGuardian() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Input
                    placeholder='Digite uma descrição'
                ></Input>
                <Input
                    placeholder='Digite uma data'
                ></Input>
                <Input
                    placeholder='Digite um horário'
                ></Input>

                <Submit />
            </View>
        </View>
    )
}