import { StyleSheet } from "react-native";
import { neutral, primary } from "../../constants/colors";
import Colors from "../../constants/colors";
export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: primary
    },
    cardPatient: {
      flex:1,
      backgroundColor: neutral,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
      marginBottom: 16,
      padding: 16,
    },
    card: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: neutral,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
      marginBottom: 16,
      padding: 16,
    },

    header: {
      marginBottom: 8,
    },
    headerTitle: {
      color:'#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    headerSubtitle: {
      fontSize: 12,
      color:'#ffffff',
    },
    body: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 8,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: 16,
      fontWeight: 'bold',
      color:'#ffffff',
    },
    userRole: {
      fontSize: 12,
      color:'#ffffff',
    },
    classItem: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    timelineContainer: {
      width: 30,
      alignItems: 'center',
    },
    timelineDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: Colors.senary,
      marginBottom: 8,
    },
    timelineLine: {
      flex: 1,
      width: 2,
      backgroundColor: Colors.quinary,
    },

    checkbox: {
      width: 30,
      height: 30,
      borderRadius: 15
    },
    classContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
    },
    classHours: {
      marginRight: 8,
      alignItems: 'flex-end',
    },
    startTime: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    endTime: {
      fontSize: 16,
    },
    cardTitle: {
      fontSize: 16,
      color: '#00008B',
      marginBottom: 4,
    },
    cardDate: {
      fontSize: 12,
      color: '#00008B',
      marginBottom: 8,
    },
    studentListContainer:{
      marginRight:10,
    },
    studentAvatar: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginLeft: -3,
      borderWidth:1,
      borderColor:'#fff'
    },

    noDaily: {
      textAlign: 'center',
      color: neutral,
      fontSize: 20
    }
  });