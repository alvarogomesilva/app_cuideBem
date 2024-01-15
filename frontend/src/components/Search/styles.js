import { StyleSheet } from "react-native";
import { neutral, second, white } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        height: 58,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    search: {
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        fontSize: 20,
        backgroundColor: neutral,
        borderRadius: 10,
    },

    icon: {
        color: white,
        fontSize: 25,
        right: 15,
        position: 'absolute'
    }
})