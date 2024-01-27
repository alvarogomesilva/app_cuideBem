import { View, Text, Image, FlatList } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { useState } from 'react';
export default function DailyRoutinePatientGuardian() {

  const [isChecked, setChecked] = useState(false);

  const classes = [
    {
      startTime: '09:00',
      endTime: '10:30',
      title: 'History of Physics',
      bgColor: '#E0FFFF',

    },
    {
      startTime: '10:30',
      endTime: '11:00',
      title: 'History of Physics',
      bgColor: '#E6E6FA',

    },
    {
      startTime: '11:00',
      endTime: '11:30',
      title: 'History of Physics',
      bgColor: '#FAF0E6',

    },
    {
      startTime: '11:30',
      endTime: '12:30',
      title: 'History of Physics',
      bgColor: '#FAFAD2',

    },
    // Add more classes as needed
  ];

  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        <View style={styles.classHours}>
          <Text style={styles.startTime}>{item.startTime}</Text>
          <Text style={styles.endTime}>{item.endTime}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: item.bgColor }]}>
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDate}>24 March, 18pm - 19pm</Text>
          </View>

          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.cardPatient}>
      <View style={styles.body}>
        <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Nome do paciente</Text>
          <Text style={styles.userRole}>Data de nascimento</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={classes}
        ListHeaderComponent={renderHeader}
        renderItem={renderClassItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

