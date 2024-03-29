import { StyleSheet } from "react-native";
import Colors from '../../../constants/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    gradient: {
        justifyContent: 'center',
        flex: 2,
        backgroundColor: Colors.quinary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },

    title: {
        fontSize: hp(1.8),
        color: Colors.white
    },

    name: {
        color: Colors.white,
        fontSize: hp(3.5)
    },

    guardian: {
        fontSize: hp(8),
        color: Colors.white,
        marginBottom: 5
    },

    span: {
        fontSize: hp(2),
        color: Colors.white,
        textAlign: 'center'
    },

    bottom: {
        flex: 4,
        
    },

    cards: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: 10
    },

    card: {
        backgroundColor: Colors.tertiary,
        borderRadius: 10,
        width: wp(40),
        height: hp(25),
        justifyContent: 'center'
    },

    icon: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: hp(10)
    },

    text: {
        fontSize: hp(2.5),
        marginHorizontal: 15,
        marginTop: 25,
        color: Colors.white
    },

    pulse: {
        fontSize: hp(2),
        position: 'absolute',
        bottom: 0,
        right: 10,
        marginBottom: 15,
        color: Colors.white
    },

    areaButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})