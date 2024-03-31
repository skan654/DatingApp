import { StyleSheet, Text, View } from "react-native";
import Header from "../headersFooters.js/header";
import Footer from "../headersFooters.js/footer";
import ListUsers from "./listUsers";
import { useTheme } from '@react-navigation/native';
export default function Top10Main() {
const {colors}=useTheme()
return (
<View style={styles.container}>
<Header />
<Text style={[styles.title,{color:colors.text}]}> TOP 10 Matching Users For
you!</Text>
<ListUsers />
<Footer />
</View>
);
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
});
