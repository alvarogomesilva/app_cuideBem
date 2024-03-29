import { StyleSheet } from "react-native";
import { neutral, primary, white } from "../../constants/colors";

export const styles = StyleSheet.create({

    box: {
        position: 'relative',
        marginVertical: 10
    },

    input: {
        borderColor: neutral,
        borderWidth: 1,
        backgroundColor: white,
        color: neutral,
        borderRadius: 10,
        fontSize: 18,
        textAlignVertical: "top",
        paddingLeft: 50
    }
})