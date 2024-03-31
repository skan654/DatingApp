import { StyleSheet, Text, View } from "react-native";
export default function Footer() {
return (
<View style={styles.container}>
<Text>All rights reserved by SMU, 2023</Text>
</View>
);
}
const styles = StyleSheet.create({
Container: {
backgroundColor: "grey",
alignItems: "center",
justifyContent: "center",
width: 500,
},
});