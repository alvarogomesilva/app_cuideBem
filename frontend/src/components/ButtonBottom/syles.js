import { StyleSheet } from "react-native";
import { second, white } from "../../constants/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 10,
        marginBottom: 15
    },

    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: second,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        fontSize: 40,
        color: white
    }
})