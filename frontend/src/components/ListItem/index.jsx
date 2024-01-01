import styles from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
const ListItem = () => {
  return (
    <TouchableOpacity style={styles.background}>
      <View style={styles.container}>
        <FontAwesome5 name="user-alt" style={styles.icon} />
        <Text style={styles.text}>Nome do paciente</Text>
      </View>
      <MaterialIcons name="edit" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ListItem;
