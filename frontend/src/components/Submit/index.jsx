import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


const Submit = () => {
    return (
        <TouchableOpacity style={styles.submit}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
    )
}

export default Submit;