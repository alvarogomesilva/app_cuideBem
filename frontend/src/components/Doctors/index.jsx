import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Colors, { neutral, primary } from "../../constants/colors";
import { useEffect, useState } from "react";
import { Fontisto } from '@expo/vector-icons';
import { URL } from "../../api";

const Doctors = ({ data, onPress, }) => {

  const [avatar, setAvatar] = useState(`${URL}/files/${data?.photo}`);

  useEffect(() => {
    setAvatar(`${URL}/files/${data?.photo}`);
  }, [data?.photo]);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.box}>
        {avatar && data?.photo ? (
          <Image
            key={data?.photo} 
            source={{ uri: avatar }}
            width={50}
            height={50}
            borderRadius={25}
          />
        ) : (
          <Fontisto name="doctor" size={40} color='#e0e0e0' />
        )}
        <View style={styles.credentials}>
          <Text style={styles.name}>{data?.name}</Text>
        </View>
      </View>

      <View style={{ width: 10, height: 10, backgroundColor: Colors.senary, borderRadius: 5, marginRight: 15 }}/>

    </TouchableOpacity>
  );
};

export default Doctors;
