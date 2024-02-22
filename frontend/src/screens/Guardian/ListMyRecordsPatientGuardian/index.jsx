import { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Patients from '../../../components/Patients';
import { usePatients } from '../../../hooks/usePatients';
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable';

const MemoizedPatients = memo(Patients);

export default function ListMyRecordsPatientGuardian() {
    const { listPatients } = usePatients()
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <LinearGradient
                    colors={['#5E7B99', '#C4E1FF']}
                    style={styles.gradient}>

                    <Text style={styles.title}>Prontuários</Text>

                </LinearGradient>
            </View>
            <View style={styles.content}>
                {listPatients.length > 0 ? (
                    <Animatable.View animation='fadeInLeft' duration={1000}>
                        <FlatList
                            style={styles.flatList}
                            data={listPatients}
                            renderItem={({ item }) => <MemoizedPatients
                                data={item}
                                onPress={() => navigation.navigate('ListMyDoctorsRecordGuardian', { patient: item })}
                            />}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </Animatable.View>
                ) : (
                    <Text style={styles.noPatients}>Nenhum paciente cadastrado!</Text>
                )}
            </View>

        </View>
    );
};

