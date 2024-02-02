import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


const Submit = ({ onPress, loadingAuth , text }) => {


    return (
        <TouchableOpacity
            style={styles.submit}
            onPress={onPress}
            activeOpacity={0.7}
        >
            {loadingAuth ? (
                <ActivityIndicator size={25} color="white" />
            ) : (
                <Text style={styles.text}>{text}</Text>
            )}

        </TouchableOpacity>
    )
}

export default Submit;