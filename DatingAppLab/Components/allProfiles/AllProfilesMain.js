import Header from "../Header";
import Footer from "../Footer";
import { StyleSheet, Text, View } from "react-native";
import ListProfiles from "../ListProfiles";
import { useTheme } from '@react-navigation/native';
export default function AllProfilesMain() {
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: colors.text }]}> Initiate All Profiles!</Text>
            </View>
            <ListProfiles />
            <Footer />
        </View>
    );
}
{
    /* <ImageBackground
    source={{uri:'https://images.pexels.com/photos/170781/pexels-photo170781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}
    resizeMode="cover" style={{flex: 1}}>
    </ImageBackground> */
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        marginTop: 10,
        fontSize: 16,
    },
    containerText: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        marginTop: 80,
    },
});