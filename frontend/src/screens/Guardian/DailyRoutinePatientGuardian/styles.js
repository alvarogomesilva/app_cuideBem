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

  areaImage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginHorizontal: 15
  },

  image: {
    width: wp(17),
    height: hp(10),
    borderRadius: 100
  },

 

  name: {
    fontSize: hp(3),
    color: Colors.white
  },

  subTitle: {
    color: Colors.white,
    marginTop: 5
  },

  content: {
    marginTop: 15
  }

});


