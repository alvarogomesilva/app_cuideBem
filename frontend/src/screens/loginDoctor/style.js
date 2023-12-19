import { StyleSheet } from "react-native";
import{primary} from '../../constants/colors'
import{white} from '../../constants/colors'
import{second} from '../../constants/colors'

export const styles = StyleSheet.create({

imageLogo:{
    width:180,
    height:180,
    marginTop:40  
},

textLogo:{
    marginBottom:90,
    fontSize:30   
},

blocksLogin:{
    backgroundColor:white,
    width:340,
    height:60,
    marginBottom:30,
    borderRadius:6,
    flexDirection:'row'   
},

images:{
    marginTop:18,
    width:40,
    height:30,
    marginLeft:20
},

textLogin:{
    marginLeft:20,
    fontSize:20,
    marginTop:5

},

blockCMR:{
    backgroundColor:white,
    width:250,
    height:60,
    marginBottom:30,
    borderRadius:6,
    flexDirection:'row',
    marginRight:80
},

textCRM:{
    marginTop:5,
    marginLeft:20,
    fontSize:20
},

})