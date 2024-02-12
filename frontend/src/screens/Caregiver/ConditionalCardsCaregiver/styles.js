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
    color: '#e0e0e0',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 15
  },

  content: {
    marginHorizontal: 15
  },

  cards: {
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 10
},

card: {
    backgroundColor: Colors.tertiary,
    borderRadius: 10,
    width: wp(40),
    height: hp(25),
    justifyContent: 'center'
},

icon: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: hp(10)
},

text: {
    fontSize: hp(2.5),
    marginHorizontal: 15,
    marginTop: 25,
    color: Colors.white
},

pulse: {
    fontSize: hp(2),
    position: 'absolute',
    bottom: 0,
    right: 10,
    marginBottom: 15,
    color: Colors.white
},

});

