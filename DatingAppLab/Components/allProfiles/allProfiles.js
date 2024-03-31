import Header from "../Header";
import Footer from "../Footer";
import { StyleSheet, Text, View } from "react-native";
import ListProfiles from "./listProfiles";
export default function AllProfilesMain() {
return (
<View style={styles.container}>
<Header />
<View style={styles.textContainer}>
<Text style={styles.title}> All Profiles Ready to Start!</Text>

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
StyleContainer: {
flex: 1,
alignItems: "center",
justifyContent: "space-between",
},
AllTitles: {
marginTop: 30,
fontSize: 18,
},
text: {
justifyContent: "center",
alignItems: "center",
position: "absolute",
marginTop: 60,
},
});