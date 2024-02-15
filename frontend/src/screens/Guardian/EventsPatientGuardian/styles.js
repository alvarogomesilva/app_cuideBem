import { StyleSheet } from "react-native";
import { neutral, primary, white } from '../../../constants/colors'
import Colors from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },


  gradient: {
    height: hp(50),
    backgroundColor: Colors.quinary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center'
  },

  content: {
    marginTop: 15,
    marginHorizontal: 15
  }

});