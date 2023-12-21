import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    content: {
        flexDirection: "row",
        marginTop: "70%",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    textaligh: {
        marginLeft: 13,
        marginTop: 10
    },

    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20
    },

    logo: {
        alignSelf: "center",
        height: 180,
        width: 180,
        marginTop: 45
    }


})