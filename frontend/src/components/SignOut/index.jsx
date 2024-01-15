import { TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";
import { white } from "../../constants/colors";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const SignOut = () => {
    const { signOut } = useContext(AuthContext)
    return (
        <TouchableOpacity style={styles.signOut} onPress={() => signOut()}>
            <FontAwesome5 name="sign-out-alt" size={35} color={white} />
        </TouchableOpacity>

    )
}

export default SignOut