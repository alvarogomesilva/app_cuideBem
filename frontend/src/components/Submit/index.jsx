import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


const Submit = ({ onPress }) => {


    return (
        <TouchableOpacity 
            style={styles.submit}
            onPress={onPress}
        >
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
    )
}

export default Submit;