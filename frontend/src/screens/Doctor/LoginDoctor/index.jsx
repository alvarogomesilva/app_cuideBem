import { View , Text , Image,style,TouchableOpacity,TextInput } from "react-native";
// import{Background} from '../../components/Background'
import{white , primary} from '../../../constants/colors'
import{second} from '../../../constants/colors'
import{styles} from './styles'
export default function LoginDoctor(){
    return(
        <View style={{backgroundColor:primary,width:"100%",height:"100%"}}>
   
           <Image source={require("../../../../assets/logo.png") } style={styles.imageLogo}/>
           <Text style={styles.textLogo}>Acessar</Text> 
         
        <TouchableOpacity style={styles.blocksLogin}>
           
           
        <Image source={require('../../../../../assets/people.png')} style={styles.images}/>


        <TextInput style={styles.textLogin}>Digite seu email</TextInput>
           
            
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.blocksLogin}>

        <Image source={require('../../../../assets/password.png')} style={styles.images}/>

        <TextInput style={styles.textLogin}>Digite sua senha</TextInput>

        </TouchableOpacity>
        
        <TouchableOpacity style={styles.blockCMR}>
        
        <Image source={require('../../../../assets/people.png')}  style={styles.images}/>

        <TextInput style={styles.textCRM}>Digite seu CRM</TextInput>


        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:second,width:340,height:60,borderRadius:6,marginTop:80}}>

        <Text style={{marginTop:15,marginLeft:130,fontSize:30,color:"white"}}>Enviar</Text>

        </TouchableOpacity>


      

        
        </View>    
    )
}