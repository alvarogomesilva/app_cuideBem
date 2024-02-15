import { format } from "date-fns";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import api from '../../api';

const Events = ({ item, onLoad }) => {
  const deleteEvent = async () => {
    try {
      await api.delete(`/events/${item.id}`);
      console.log('Evento excluído');
      onLoad()
    } catch (error) {
      console.log(error);
    }
  };

  const handleEvent = () => {
    Alert.alert(
      `${item.description}`,
      'Deseja realmente excluir?',
      [
        { text: 'No', onPress: () => console.log('Cancelado'), style: 'cancel' },
        { text: 'Yes', onPress: deleteEvent },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <TouchableOpacity style={styles.classItem} onLongPress={handleEvent}>
      
      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>Horário</Text>
          <Text style={styles.endTime}>{format(item.hour, 'HH:mm')}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.color }]}>
          <View>
            <Text style={styles.cardTitle}>{item.description}</Text>
            <Text style={styles.cardDate}>{format(item.date, 'dd/MM/yyyy')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Events;
