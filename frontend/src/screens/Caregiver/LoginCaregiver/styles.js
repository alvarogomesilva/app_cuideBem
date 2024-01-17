import { StyleSheet } from "react-native";
import { neutral } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 10
    },

    content: {
        marginHorizontal: 15,
    },

    icon: {
        position: 'absolute',
        color: neutral,
        fontSize: 20,
        top: 15,
        left: 15,
        zIndex: 2
    }
})