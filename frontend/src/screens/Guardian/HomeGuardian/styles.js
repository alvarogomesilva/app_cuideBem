import { StyleSheet } from "react-native";
import { neutral, primary, white } from "../../../constants/colors";

export const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: primary
  },

  signOut: {
    position: 'absolute',
    right: 20,
    marginVertical: 40
  },

  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  boxUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconUser: {
    fontSize: 50,
    color: neutral
  },

  namePatient: {
    marginTop: 30,
    fontSize: 30
  },

  bottom: {
    flex: 4,
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardIcon: {
    fontSize: 100,
    color: neutral
  }

})

export default styles