import { StyleSheet } from "react-native";
import { neutral, white } from "../../constants/colors";

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: white,
    borderRadius: 10,
    height: 55,
    marginVertical: 10
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },

  icon: {
    fontSize: 30,
    color: neutral
  }

});

export default styles;
