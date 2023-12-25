import { StyleSheet } from "react-native"
import { white } from "../../constants/colors"

export const styles = StyleSheet.create({
    card: {
        backgroundColor: white,
        borderRadius: 10,
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 18,
        marginTop: 25
    }
})

