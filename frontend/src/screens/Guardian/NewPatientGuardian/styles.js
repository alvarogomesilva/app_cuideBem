import { StyleSheet } from "react-native";
import { neutral, primary, second, white } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },

    content: {
        width: '90%',
        alignSelf: 'center'
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    button: {
        marginVertical: 10,
        backgroundColor: neutral,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },

    submit: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: second,
        height: 50,
        borderRadius: 10
    },

    submitText: {
        color: white,
        fontSize: 20
    }
})