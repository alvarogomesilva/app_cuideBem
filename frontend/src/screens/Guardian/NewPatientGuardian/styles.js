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
    },

    rounded: {
        width: wp(30),
        height: hp(17),
        borderRadius: 100,
        backgroundColor: Colors.ghost,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: -hp(9)
    },


    boxSearch: {
        position: 'relative'
    },

    search: {
        fontSize: hp(2.5),
        paddingLeft: 15,
        backgroundColor: Colors.white,
        marginHorizontal: 15,
        marginVertical: 15,
        height: hp(8),
        borderRadius: 10
    },

    icon: {
        fontSize: hp(3),
        color: '#e0e0e0',
        position: 'absolute',
        alignSelf: 'flex-end',
        top: hp(4.5),
        right: 30
    },

    text: {
        color: '#e0e0e0',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15
    },

    content: {
        marginHorizontal: 15,
    },

    titleInput: {
        marginHorizontal: 10,
        fontSize: hp(2),
        marginBottom: 5,
        color: '#AAA'
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
        padding: 10,
        marginBottom: 10
    },

    areaButton: {
        flex: 1,
        alignItems: 'center'
    },

    button: {
        width: wp('90%'),
        height: hp(8),
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: Colors.quinary,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: hp(3),
        color: Colors.white
    }

});

