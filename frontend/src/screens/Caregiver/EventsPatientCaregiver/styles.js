import { StyleSheet } from "react-native";
import { neutral, primary, white } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },

    calendar: {
      marginHorizontal: 10,
      marginBottom: 15,
      borderRadius: 5,
    },

    noEvent: {
      textAlign: 'center',
      fontSize: 18,
      color: neutral
    }
 
  });