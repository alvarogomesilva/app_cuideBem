import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


const Submit = ({ onPress, loadingAuth }) => {


    return (
        <TouchableOpacity
            style={styles.submit}
            onPress={onPress}
        >
            {loadingAuth ? (
                <ActivityIndicator size={25} color="white" />
            ) : (
                <Text style={styles.text}>Login</Text>
            )}

        </TouchableOpacity>
    )
}

export default Submit;