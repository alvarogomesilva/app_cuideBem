import { SafeAreaView, Text, View } from "react-native";
import {styles} from "./styles";
import ListItem from "../../../components/ListItem";
import Search from "../../../components/Search";

export default function RecordDoctor() {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.title}>Prontuários</Text>
            <Search />

            <ListItem />
            <ListItem />
            <ListItem />

            </View>

        </SafeAreaView>
    );
}