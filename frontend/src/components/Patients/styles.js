import { StyleSheet } from "react-native";
import Colors, { neutral, white } from '../../constants/colors'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        backgroundColor: white,
        marginHorizontal: 5,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2,
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
        color: '#e0e0e0'
    }
})