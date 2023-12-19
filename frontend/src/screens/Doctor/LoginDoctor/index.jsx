import { View , Text , Image,style,TouchableOpacity,TextInput, SafeAreaView } from "react-native";
import{styles} from './styles'
import Logo from "../../../components/Logo";
import Input from "../../../components/Input";

export default function LoginDoctor(){
    return(
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Acessar</Text>
            
            <Input placeholder='Digite seu email'/>
            <Input placeholder='Digite sua senha'/>
        </SafeAreaView>   
    )
}