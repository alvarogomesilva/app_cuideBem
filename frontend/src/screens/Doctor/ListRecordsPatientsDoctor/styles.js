import { StyleSheet } from "react-native";
import { neutral, primary } from "../../../constants/colors";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: primary,
  },

  container:{
    flex:1,
    marginHorizontal: 15
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 15
  },  
  text: {
    textAlign: 'center',
    color: neutral,
    fontSize: 20
  }

});

export default styles;
