import { useEffect, memo } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';
import { LinearGradient } from "expo-linear-gradient";

const MemoizedPatients = memo(Patients);
export default function ListMyPrescriptionsPatientGuardian() {

    const navigation = useNavigation();
    const { listPatients } = usePatients()


    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>

                    <Text style={styles.title}>Receitas</Text>
                </LinearGradient>
            </View>

            <View style={styles.content}>

                <FlatList
                    style={styles.flatList}
                    data={listPatients}
                    renderItem={({ item }) => <MemoizedPatients
                        data={item}
                        onPress={() => navigation.navigate('ListMyDoctorsPrescriptionGuardian', { patient: item })}
                    />}

                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};
