import { View, Text, ImageBackground, style, Image } from 'react-native';
import { Style } from './styles'

export default function Identification() {
  return (
    <>
      <ImageBackground source={require("../../../assets/background.png")} style={{ width: "100%", height: "100%" }}>
        <View style={Style.BlocoImages}>

          <View>
            <Image source={require("../../../assets/caregiver.png")} />
            <View style={Style.textaligh}>
              <Text style={Style.title}>Cuidador</Text>
            </View>
          </View>

          <View>
            <Image source={require("../../../assets/guardian.png")} />
            <View style={Style.textaligh}>
              <Text style={Style.title}>Guardiao</Text>
            </View>
          </View>

          <View>
            <Image source={require("../../../assets/doctor.png")} />
            <View style={Style.textaligh}>
              <Text style={Style.title}>Medicos</Text>
            </View>
          </View>

        </View>

        <Image source={require('../../../assets/logo.png')} style={Style.logo} />

      </ImageBackground>



    </>
  )
}