import Checkbox from 'expo-checkbox';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { compareAsc, differenceInMinutes, format, parse } from 'date-fns';
import { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const DailyRoutine = ({ data, patient, user }) => {
  const [alertCan, setAlertCan] = useState(false)
  const [alertNo, setAlertNo] = useState(false)

  const showAlertCan = () => setAlertCan(true);
  const hideAlertCan = () => setAlertCan(false);

  const showAlertNo = () => setAlertNo(true);
  const hideAlertNo = () => setAlertNo(false);

  const handleCheckboxChange = async (daily) => {
    const dailyHour = format(daily.hour, 'HH:mm'); 
    const hourNow = format(new Date(), 'HH:mm'); 
    
    const date1 = parse(dailyHour, 'HH:mm', new Date());
    const date2 = parse(hourNow, 'HH:mm', new Date());
    const comparacao = compareAsc(date1, date2);
    
    const diferencaEmMinutos = differenceInMinutes(date2, date1);
    if (comparacao === -1 && diferencaEmMinutos > 15) {
      console.log('Já passou da hora de fazer');
    } else if (comparacao === 1) {
      showAlertNo()
    } else {
      console.log('Já pode')
      setAlertCan()
    }
  }

  const sortedData = data.slice().sort((a, b) => new Date(a.hour) - new Date(b.hour));

  const Header = () => {
    return (
      <View style={styles.cardPatient}>
        <View style={styles.body}>
          <Image source={{ uri: `http://10.3.18.71:3000/files/${patient.photo}` }} style={styles.avatar} />
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
    return (
      <>
        <TouchableOpacity style={styles.classItem} onLongPress={() => handleCheckboxChange(item)}>
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
            </View>
          </View>
        </TouchableOpacity>

        <AwesomeAlert
          show={alertCan}
          showProgress={false}
          title='Marcar como concluída?'
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Não"
          confirmText="Sim, concluir"
          confirmButtonColor="#DD6B55"
          onCancelPressed={showAlertCan}
          onConfirmPressed={hideAlertCan}
        />

        <AwesomeAlert
          show={alertNo}
          showProgress={false}
          title='Ainda não chegou a hora'
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          cancelText="Fechar"
          confirmButtonColor="#DD6B55"
          onCancelPressed={hideAlertNo}
        />

      </>
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
