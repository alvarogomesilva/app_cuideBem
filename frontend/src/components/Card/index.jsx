import { Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'

const Card = ({ onPress, children}) => {
    
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
                {children}        
        </TouchableOpacity>
    )
}

export default Card;