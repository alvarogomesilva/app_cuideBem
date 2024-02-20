import { useEffect, memo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Doctors from '../../../components//Doctors';
import { LinearGradient } from "expo-linear-gradient";
import api from '../../../api';


const MemoizedDoctors = memo(Doctors);

export default function ListMyDoctorsRecordGuardian({route}) {

    const navigation = useNavigation();
    const [doctors, setDoctors] = useState([])
    const [patient, setPatient] = useState(route.params?.patient)

    useEffect(() => {
        async function loadDoctors() {
            try {
                const doctors = await api.get(`/users/${1}`)
                setDoctors(doctors.data)  
            } catch (error) {
                console.log(error)
            }
        }

        loadDoctors()
    }, [])

    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>

                    <Text style={styles.title}>Médicos</Text>
                    
                </LinearGradient>
            </View>

            <View style={styles.content}>

                <FlatList
                    style={styles.flatList}
                    data={doctors}
                    renderItem={({ item }) => <MemoizedDoctors
                        data={item}
                        onPress={() => navigation.navigate('ShowRecordPatientGuardian', { doctor: item, patient: patient })}
                    />}

                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};
