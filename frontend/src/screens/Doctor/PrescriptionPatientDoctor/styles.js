import { StyleSheet } from "react-native";
import { neutral, primary, white } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
        justifyContent: 'center'
    },

    patient: {
        marginBottom: 20,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 10,
        backgroundColor: white,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },

    box: {
        flex: 2,
        backgroundColor: white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    content: {
        marginVertical: 15,
        marginHorizontal: 15
    },

    name: {
        fontSize: 18,
        color: neutral
    },

    text: {
        fontStyle: 'italic',
        color: neutral,
        marginVertical: 5,
        fontSize: 20
    },

    textarea: {
        padding: 15,
        height: 350,
        borderRadius: 10,
        textAlignVertical: 'top',
        backgroundColor: '#eeeeee',
        fontSize: 20,
    }
})
