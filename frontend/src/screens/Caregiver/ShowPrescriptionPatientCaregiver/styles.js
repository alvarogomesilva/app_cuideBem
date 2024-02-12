import { StyleSheet } from "react-native";
import Colors from '../../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    safeAreaView: {
        flex: 1
    },

    top: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },

    rounded: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(65),
        height: hp(35),
        borderRadius: 160,
        backgroundColor: Colors.secondary

    },

    bottom: {
        flex: 3,
        backgroundColor: Colors.white,
        marginHorizontal: 15
    },

    hr: {
        backgroundColor: Colors.nonary,
        height: 5,
        borderRadius: 10,
        marginVertical: 15
    },

    areaButtom: {
        width: '100%',
        position: 'absolute',
        marginBottom: 10,
        bottom: 0
    },

    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(8),
        backgroundColor: Colors.quaternary
    },

    buttonText: {
        color: Colors.white,
        fontSize: hp(3)
    }

})