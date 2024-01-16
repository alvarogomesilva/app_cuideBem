import { StyleSheet } from "react-native";
import { neutral, primary, second, white } from "../../../constants/colors";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: primary,
  },

  title: {
    textAlign: 'center',
    fontSize: 25
  },

  content: {
    marginHorizontal: 20
  },

  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    position: 'absolute',
    color: neutral,
    fontSize: 20,
    top: 15,
    left: 15,
    zIndex: 2
  },

  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: second,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: white,
    fontSize: 20
  }

});


