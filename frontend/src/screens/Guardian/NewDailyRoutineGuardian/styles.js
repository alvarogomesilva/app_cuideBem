import { StyleSheet } from "react-native";
import { primary } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },

    content: {
        marginHorizontal: 15
    },

    boxDates: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        width: 150,
        height: 45
    },

    hour: {
        marginVertical: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15
    }
})