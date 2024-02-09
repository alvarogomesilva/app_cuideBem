import { StyleSheet } from "react-native";
import { neutral, primary, white } from "../../../constants/colors";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: primary,
  },

  content: {
    flex: 2,
    marginTop: 25,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fafafa'
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 15
  },

  text: {
    textAlign: 'center',
    color: neutral,
    fontSize: 20,
    marginVertical: 15
  }

});

export default styles;