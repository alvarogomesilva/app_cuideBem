import { StyleSheet } from "react-native";
import Colors from '../../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    gradient: {
        flex: 2,
    },

    safeAreaView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: wp(45),
        height: hp(25),
    },

    content: {
        flex: 2,
        marginTop: 15,
        backgroundColor: Colors.white
    },

    title: {
        textAlign: 'center',
        fontSize: hp(3.5),
        fontWeight: "700",
        color: Colors.octonary,
        marginBottom: 15
    },

    boxInputs: {
        marginHorizontal: 15,
    },

    box: {
        position: 'relative',
        marginVertical: 10,
        height: hp(6.5)
    },

    icon: {
        position: 'absolute',
        color: '#e0e0e0',
        top: 17,
        left: 15,
        fontSize: hp(2)
    },

    input: {
        height: '100%',
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        fontSize: hp(2.5),
        paddingLeft: 40
    },

    submit: {
        height: hp(8),
        backgroundColor: Colors.octonary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },

    submitText: {
        color: Colors.white,
        fontSize: hp(2.5)
    },

    labelError: {
        color: '#ff375b',
        marginBottom: 8
    }

})