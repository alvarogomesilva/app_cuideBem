import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    gradient: {
        height: hp(25),
        backgroundColor: Colors.quinary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    rounded:{
        width: wp(30),
        height: hp(17),
        borderRadius: 100,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: -hp(9)
    }, 

    image: {
        width: wp(28),
        height: hp(16),
        borderRadius: 100
    },

    bottom: {
        flex: 1,
        backgroundColor: Colors.white,
        
    },

    name: {
        top: -hp(7),
        color: Colors.black,
        fontSize: hp(3),
        textAlign: 'center'
    },

    patient: {
        top: -hp(7),
        textAlign: 'center',
        color: '#bdbdbd'
    },

    input: {
        alignSelf: 'center',
        width: wp('90%'),
        height: hp(7),
        fontSize: hp(2.6),
        backgroundColor: Colors.white,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#e0e0e0',
        textAlignVertical: 'top',
        marginBottom: 5,
        padding: 15
    },

    textarea: {
        alignSelf: 'center',
        width: wp('90%'),
        height: hp(15),
        fontSize: hp(2.6),
        backgroundColor: Colors.white,
        marginVertical: 5,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#e0e0e0',
        textAlignVertical: 'top',
        padding: 15
    },

    day: {
        alignSelf: 'flex-end',
        color: '#DDDDDD',
        marginTop: 10,
        marginRight: 20
    },

    areaButton : {
        flex: 1,
    },

    button: {
        position: 'absolute',
        backgroundColor: Colors.quaternary,
        width: wp('90%'),
        alignSelf: 'center',
        height: hp(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        bottom: 0,
        marginBottom: 15
    },

    buttonText: {
        color: Colors.white,
        fontSize: hp(2.5)
    },

    labelError: {
        color: 'red',
        marginHorizontal: 20
    }
})
