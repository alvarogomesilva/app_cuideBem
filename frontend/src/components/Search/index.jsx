import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.search} 
                placeholder='Digite um paciente'
            />
            <AntDesign name="search1" style={styles.icon} />
        </View>
    )
}

export default Search;