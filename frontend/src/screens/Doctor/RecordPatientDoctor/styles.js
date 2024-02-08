import { StyleSheet } from 'react-native'
import { neutral, primary, white } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },
    content: {
        marginHorizontal: 15
    },

    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        color: neutral
    },

    input: {
        borderColor: neutral,
        backgroundColor: white,
        paddingLeft: 10,
        width: 125,
        fontSize: 18,
        borderRadius: 10,
        height: 45
    }
})