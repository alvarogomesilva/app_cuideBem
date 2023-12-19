import { Image, View } from "react-native"
import { styles } from "./styles"

const Logo = () => {
    return (
        <View>
            <Image source={require('../../../assets/logo.png')} style={styles.image}/>
        </View>
    )
}

export default Logo