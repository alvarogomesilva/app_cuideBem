import { StyleSheet } from "react-native";
import { neutral, primary, white } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary,
        justifyContent: 'center'
    },

    content: {
        padding: 15,
        marginHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: white,
        marginVertical: 15,
        borderRadius: 12
        
    },

    box: {
        width: 100, 
        height: 100,
        backgroundColor: '#1976d2',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 50
    },

    textarea: {
        padding: 15,
        height: 100,
        borderRadius: 10,
        textAlignVertical: 'top',
        backgroundColor: '#fafafa',
        fontSize: 22,
        
    }
})
