import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    gradient: {
        height: hp(23),
        backgroundColor: Colors.quinary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center'
    },

    title: {
        fontSize: hp(4.5),
        color: Colors.white,
        marginHorizontal: 15

    },

    text: {
        color: '#e0e0e0',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15
    },

    content: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15
    },

    input: {
        alignSelf: 'center',
        width: wp('90%'),
        fontSize: hp(2.6),
        backgroundColor: Colors.white,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#e0e0e0',
        textAlignVertical: 'top',
        padding: 15,
        marginBottom: 10
    },

    boxCheckbox: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    areaButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15
    },

    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(8),
        backgroundColor: Colors.quinary
    },

    buttonText: {
        color: Colors.white,
        fontSize: hp(3)
    }

});


