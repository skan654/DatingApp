import { StyleSheet, Text, View } from "react-native";
export default function Header() {
return (
<View style={styles.container}>
<Text style={{ fontWeight: "italic" }}> Welcome Back</Text>
</View>
);
}
const styles = StyleSheet.create({
HeaderContainer: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 50,
    marginTop: 30
},
});