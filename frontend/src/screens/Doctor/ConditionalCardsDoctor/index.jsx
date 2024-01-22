import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

import Search from "../../../components/Search";
import { memo, useCallback, useEffect, useLayoutEffect, useState } from "react";
import Patients from "../../../components/Patients";
import api from "../../../api";
import { useNavigation } from "@react-navigation/native";


const MemoizedPatients = memo(Patients);

export default function ConditionalCardsDoctor({ route }) {

    const navigation = useNavigation();
    const [listPatients, setListPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const loadPatients = useCallback(async () => {
        setLoading(true)
        try {
            const patients = await api.get('/patients', { params: { search: searchTerm } });
            setListPatients(patients.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        loadPatients();
    }, [loadPatients]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => loadPatients());
        return unsubscribe;
    }, [navigation, loadPatients]);

    const handleSearch = useCallback(
        (text) => {
            setSearchTerm(text);
            // Atualiza a lista de pacientes sempre que o usuário digita no campo de busca
            loadPatients();
        },
        [loadPatients]
    );

    // if (loading) {
    //     return (
    //         <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: primary }}>
    //             <ActivityIndicator size="large" color="#FFF" />
    //         </SafeAreaView>
    //     );
    // }
    
    useLayoutEffect(() => {
        navigation.setOptions({
          title: getTitleBasedOnParamKey(route.params.paramKey),
        });
      }, [navigation, route.params.paramKey]);
    
      const getTitleBasedOnParamKey = (paramKey) => {
        if (paramKey === 'Record') {
          return 'Prontuários';
        } else {
          return 'Receitas';
        }
      };


    if (route.params.paramKey === 'Record') {
        
        return (
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>
                    <Search value={searchTerm} onChangeText={handleSearch} />

                        <FlatList
                            data={listPatients}
                            renderItem={({ item }) => <MemoizedPatients
                                data={item}
                                onPress={() => navigation.navigate('ConditionalPrescriptionsDoctor', 
                                { paramKey: 'NewRecord', patientKey: item })}
                            />}
                        />
                </View>

            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>
                    <Search value={searchTerm} onChangeText={handleSearch} />

                    <FlatList
                        data={listPatients}
                        renderItem={({ item }) => <Patients
                            data={item}
                            onPress={() => navigation.navigate('ConditionalPrescriptionsDoctor', 
                            { paramKey: 'NewRecipes', patientKey: item })}
                        />}
                    />

                </View>

            </SafeAreaView>
        )
    }

}
