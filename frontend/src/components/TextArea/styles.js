import { StyleSheet } from "react-native";
import { neutral, white } from "../../constants/colors";

export const styles = StyleSheet.create({
    box: {
        position: 'relative',
        marginVertical: 15
    },

    input: {
        borderColor: neutral,
        borderWidth: 1,
        backgroundColor: white,
        color: neutral,
        borderRadius: 10,
        fontSize: 18,
        paddingLeft: 50
    }
})