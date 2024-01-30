import { StyleSheet } from "react-native";
import { neutral, primary, white } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },

    content: {
        marginTop: 10,
        marginHorizontal: 10,
    },
      section: {
        marginTop: 25,
        textTransform: 'capitalize'
      }
})