import { StyleSheet } from "react-native";
import { primary, second, white } from "../../constants/colors";

export const styles = StyleSheet.create({
    submit: {
        backgroundColor: second,
        marginVertical: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 58
    },

    text: {
        color: white,
        fontSize: 20
    }
})