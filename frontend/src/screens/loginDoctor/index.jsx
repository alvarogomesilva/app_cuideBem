import { View , Text , Image,style,TouchableOpacity,TextInput } from "react-native";
import{Background} from '../../components/Background'
import{white} from '../../constants/colors'
import{second} from '../../constants/colors'
import{styles} from './style'
export default function LoginDoctor(){
    return(
        <View style={Background.format}>
   
           <Image source={require("../../../assets/Logo.png") } style={styles.imageLogo}/>
           <Text style={styles.textLogo}>Acessar</Text> 
         
        <TouchableOpacity style={styles.blocksLogin}>
           
           
        <Image source={require('../../../assets/email.png')} style={styles.images}/>


        <TextInput style={styles.textLogin}>Digite seu email</TextInput>
           
            
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.blocksLogin}>

        <Image source={require('../../../assets/senha.png')} style={styles.images}/>

        <TextInput style={styles.textLogin}>Digite sua senha</TextInput>

        </TouchableOpacity>
        
        <TouchableOpacity style={styles.blockCMR}>
        
        <Image source={require('../../../assets/people.png')}  style={styles.images}/>

        <TextInput style={styles.textCRM}>Digite seu CRM</TextInput>


        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:second,width:340,height:60,borderRadius:6,marginTop:80}}>

        <Text style={{marginTop:15,marginLeft:130,fontSize:30,color:"white"}}>Enviar</Text>

        </TouchableOpacity>


      

        
        </View>    
    )
}