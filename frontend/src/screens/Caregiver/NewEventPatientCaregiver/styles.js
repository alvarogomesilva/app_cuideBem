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
    icon: {
        position: 'absolute',
        color: neutral,
        fontSize: 20,
        top: 15,
        left: 15,
        zIndex: 2
    },

    boxCheckbox: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 15
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