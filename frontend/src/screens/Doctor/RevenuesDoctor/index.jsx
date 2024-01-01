import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import ListItem from "../../../components/ListItem";
import ButtonBottom from "../../../components/ButtonBottom";
import Search from "../../../components/Search";

export default function RecordDoctor() {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.title}>Receitas</Text>
            <Search />

            <ListItem />
            <ListItem />
            <ListItem />

                <ButtonBottom />
            </View>

        </SafeAreaView>
    );
}
