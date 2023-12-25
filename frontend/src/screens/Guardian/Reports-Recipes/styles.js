import { StyleSheet } from "react-native";
import { white, primary } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },

    boxCards: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 30
    },

    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
        width: 180,
        height: 180,
        backgroundColor: white,
    },

    icon: {
        fontSize: 80,
        color: neutral
    },

    textCard: {
        marginTop: 15,
        fontSize: 20
    }
})