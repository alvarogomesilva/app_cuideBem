import Checkbox from 'expo-checkbox';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './styles';
import { format } from 'date-fns';
import { useState } from 'react';

const DailyRoutine = ({ data, patient, user }) => {

  const handleCheckboxChange = async (dailyId) => {
    console.log(dailyId)
  };

  const sortedData = data.slice().sort((a, b) => new Date(a.hour) - new Date(b.hour));

  const Header = () => {
    return (
      <View style={styles.cardPatient}>
        <View style={styles.body}>
          <Image source={{ uri: `http://192.168.0.100:3000/files/${patient.photo}` }} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{patient.name}</Text>
            <Text style={styles.userRole}>{patient.birth}</Text>
          </View>
        </View>
      </View>
    );
  };

  const NoRoutineMessage = () => {
    if (data.length === 0) {
      return (
        <View style={styles.noRoutineContainer}>
          <Text style={styles.noDaily}>Não há rotina disponível.</Text>
        </View>
      );
    }

    return null;
  };

  const Daily = ({ item }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
      <View style={styles.classItem}>
        <View style={styles.timelineContainer}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineLine} />
        </View>

        <View style={styles.classContent}>
          <View style={styles.classHours}>
            <Text style={styles.startTime}>{format(item.hour, 'HH:mm')}</Text>
            <Text style={styles.endTime}>{item.endTime}</Text>
          </View>

          <View style={[styles.card, { backgroundColor: '#4fc3f7' }]}>
            <View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDate}>{item.description}</Text>
            </View>

            {user !== 2 && (
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={() => handleCheckboxChange(item.id)}
                
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={sortedData}
        ListHeaderComponent={Header}
        renderItem={({ item }) => <Daily item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <NoRoutineMessage />
    </View>
  );
};

export default DailyRoutine;
