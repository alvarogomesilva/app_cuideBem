import { Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'

const Card = ({ title , onPress, children}) => {
    
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            {children}
            
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Card;