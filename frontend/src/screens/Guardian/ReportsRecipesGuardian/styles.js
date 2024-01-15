import { StyleSheet } from "react-native";
import { primary, neutral } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
    },

    boxCards: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 30
    },

    icon: {
        fontSize: 80,
        color: neutral
    },
})