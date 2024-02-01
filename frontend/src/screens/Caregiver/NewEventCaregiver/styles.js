import { StyleSheet } from "react-native";
import { neutral, primary, second, white } from "../../../constants/colors";

const styles = StyleSheet.create({
    background: {
        backgroundColor: primary,
        flex: 1,
    },

    container: {
        margin: 40
    },

    title: {
        fontSize: 30,
        alignSelf: "center",
        marginBottom: 40,
        marginTop:30
    },

    icon: {
        position: 'absolute',
        color:neutral,
        fontSize: 28,
        top: 10,
        left: 10,
        zIndex:2
    },

    smallerinput:{
    marginRight:120
    },

    buttom: {
        backgroundColor: second,
        padding: 10,
        borderRadius: 10
    },

    textbuttom: {
        textAlign: "center",
        color: white
    }
})

export default styles