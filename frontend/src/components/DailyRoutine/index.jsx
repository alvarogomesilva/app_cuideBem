import Checkbox from "expo-checkbox"
import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./styles"
import { format } from 'date-fns'
import { useState } from "react"

const DailyRoutine = ({ data, item, patient }) => {
    const [isChecked, setChecked] = useState(false);

    const Header = () => {
        <View style={styles.cardPatient}>
            <View style={styles.body}>
                <Image source={{ uri: `http://10.3.18.71:3000/files/${patient.photo}` }} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{patient.name}</Text>
                    <Text style={styles.userRole}>{patient.birth}</Text>
                </View>
            </View>
        </View>
    }

    const Daily = ({item}) => {
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

                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                </View>
            </View>
        </View>
    }



    return (
        <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            data={data}
            renderItem={({ item }) => <Daily item={item} patient={patient} />}
            keyExtractor={(item, index) => index.toString()}
        />

    )
}

export default DailyRoutine