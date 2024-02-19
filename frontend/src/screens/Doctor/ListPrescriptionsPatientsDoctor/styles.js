import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },

  gradient: {
    height: hp(30),
    backgroundColor: Colors.quinary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'flex-end'
  },
  
  title: {
    fontSize: hp(4.5),
    color: Colors.white,
    marginHorizontal: 15
    
  },

  boxSearch: {
    position: 'relative'
  },

  search: {
    fontSize: hp(2.5),
    paddingLeft: 15,
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    marginVertical: 15,
    height: hp(8),
    borderRadius: 10
  },

  icon: {
    fontSize: hp(3),
    color: '#e0e0e0',
    position: 'absolute',
    alignSelf: 'flex-end',
    top: hp(4.5),
    right: 30
  },

  text: {
    color: Colors.octonary,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 15
  },

  content: {
    marginHorizontal: 15
  }

});

export default styles;
