import { Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'

const Card = ({ title, children}) => {
    return (
        <TouchableOpacity style={styles.card}>
            {children}
            
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Card;