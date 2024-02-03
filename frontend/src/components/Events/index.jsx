import { format } from "date-fns";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import api from '../../api';

const Events = ({ item, onDelete }) => {
  const deleteEvent = async () => {
    try {
      await api.delete(`/events/${item.id}`);
      console.log('Evento excluído');
      onDelete();
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
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>Horário</Text>
          <Text style={styles.endTime}>{item.hour}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.color }]}>
          <View>
            <Text style={styles.cardTitle}>{item.description}</Text>
            <Text style={styles.cardDate}>{format(item.date, 'MM/dd/yyyy')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Events;
