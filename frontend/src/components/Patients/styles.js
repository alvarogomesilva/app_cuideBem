import { StyleSheet } from "react-native";
import { neutral, white } from '../../constants/colors'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        backgroundColor: white,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10
    },

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },

    credentials: {
        gap: 5
    },

    name: {
        fontSize: 18
    }, 

    birth: {
        color: neutral
    }
})