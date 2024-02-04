import { StyleSheet } from "react-native";
import { neutral, primary, second } from "../../../constants/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },

    title: {
        textAlign: 'center',
        fontSize: 30
    },

    flatList: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 15
    },

    noPatients: {
        marginVertical: 20,
        fontSize: 20,
        textAlign: 'center',
        color: neutral
    },

    button: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        marginHorizontal: 15,
        marginVertical: 15,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: second
    }
})