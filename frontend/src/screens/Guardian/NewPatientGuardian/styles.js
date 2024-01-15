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
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
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