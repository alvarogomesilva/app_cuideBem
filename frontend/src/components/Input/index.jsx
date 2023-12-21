import { TextInput, View } from "react-native"
import { styles } from "./styles"
import { neutral } from "../../constants/colors"


const Input = ({ placeholder, autoCapitalize, children }) => {
    return (
        <View style={styles.box}>
            {children}
            
            <TextInput 
                placeholder={placeholder} 
                style={styles.input} 
                placeholderTextColor={neutral}
                autoCapitalize={autoCapitalize}
            />
        </View>


    )
}

export default Input