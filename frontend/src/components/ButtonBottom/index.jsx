import { TouchableOpacity, View } from "react-native";
import { styles } from "./syles";
import { Entypo } from "@expo/vector-icons";

const ButtonBottom = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Entypo name="plus" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default ButtonBottom;