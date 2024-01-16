import { StyleSheet } from "react-native";
import { neutral, primary, second, white } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },

    content: {
        marginHorizontal: 20
    },

    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15
    },

    input: {
        fontSize: 22,
        backgroundColor: white,
        borderRadius: 10,
        padding: 15,
        height: '80%'
    },
  
});


