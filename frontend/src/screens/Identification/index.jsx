import { styles } from './styles'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function Identification({ navigation }) {
  return (

    <ImageBackground source={require("../../../assets/background.png")} style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity onPress={() => navigation.navigate('LoginCaregiver')}>
          <Image source={require("../../../assets/caregiver.png")} />
          <View style={styles.textaligh}>
            <Text style={styles.title}>Cuidador</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginGuardian')}>
          <Image source={require("../../../assets/guardian.png")} />
          <View style={styles.textaligh}>
            <Text style={styles.title}>Guardião</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginDoctor')}>
          <Image source={require("../../../assets/doctor.png")} />
          <View style={styles.textaligh}>
            <Text style={styles.title}>Médicos</Text>
          </View>
        </TouchableOpacity>

      </View>

      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

    </ImageBackground>


  )
}