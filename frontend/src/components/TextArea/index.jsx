import { styles } from "./styles"
import { TextInput, View } from "react-native"

const TextArea = ({ children, placeholder, height, multiline, value, numberOfLines, onChangeText }) => {
    return (
        <View style={styles.box}>
            {children}

            <TextInput
                style={[styles.input, { height: height || 50 }]}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={numberOfLines}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default TextArea