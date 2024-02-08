import { TextInput, View } from "react-native"
import { styles } from "./styles"
import { neutral } from "../../constants/colors"
import MaskInput from 'react-native-mask-input';

const Input = ({
    placeholder,
    autoCapitalize,
    children,
    value,
    onChangeText,
    secureTextEntry,
    mask,
    keyboardType,
    height,
    paddingTop,
    multiline
}) => {

    return (
        <View style={styles.box} >
            {children}

            <MaskInput
                placeholder={placeholder}
                style={[styles.input, { height: height || 45, paddingTop: paddingTop || 10 }]}
                placeholderTextColor={neutral}
                autoCapitalize={autoCapitalize}
                value={value}
                onChangeText={(text) => onChangeText(text)}
                secureTextEntry={secureTextEntry}
                mask={mask}
                keyboardType={keyboardType}   
                multiline={multiline || false}         
            />
        </View>


    )
}

export default Input