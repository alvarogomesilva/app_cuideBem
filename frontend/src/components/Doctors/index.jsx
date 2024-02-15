import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { neutral, primary } from "../../constants/colors";
import { useEffect, useState } from "react";

const Doctors = ({ data, onPress, }) => {

  const [avatar, setAvatar] = useState(`http://10.3.18.71:3000/files/${data?.photo}`);

  useEffect(() => {
    setAvatar(`http://10.3.18.71:3000/files/${data?.photo}`);
  }, [data?.photo]);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.box}>
        {avatar && data?.photo ? (
          <Image
            key={data?.photo} // Adicionando uma chave única para garantir a re-renderização
            source={{ uri: avatar }}
            width={50}
            height={50}
            borderRadius={25}
          />
        ) : (
          <FontAwesome5 name="user-alt" size={40} color={neutral} />
        )}
        <View style={styles.credentials}>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.birth}>{data?.birth}</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

export default Doctors;
