import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },

  gradient: {
    height: hp(23),
    backgroundColor: Colors.quinary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center'
  },

  title: {
    fontSize: hp(4.5),
    color: Colors.white,
    marginHorizontal: 15
    
  },

  text: {
    color: '#e0e0e0',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 15
  },

  content: {
    marginHorizontal: 15,
    marginTop: 15
  }

});


