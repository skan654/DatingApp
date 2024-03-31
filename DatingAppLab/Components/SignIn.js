import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import {React, useState }from "react";
import { TextInput } from 'react-native-paper';
import Footer from "./Footer";
import {useTheme} from '@react-navigation/native';
export default function SignIn() {
    const {colors}=useTheme()
    const user = {
        email: "",
        password:"",
    };
    const [userInfo, setUserInfo] = useState(user);
    console.log(userInfo);
    const image = { uri: 'https://www.google.com/search?q=heart+logo+3D+gif&tbm=isch&ved=2ahUKEwjZvpm304D9AhXl67sIHeCgDcwQ2-cCegQIABAA&oq=heart+logo+3D+gif&gs_lcp=CgNpbWcQAzoECCMQJzoECAAQHjoGCAAQCBAeOggIABAIEB4QE1DkAViTIWDTIWgDcAB4AIAByQOIAbMHkgEFNi40LTGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=pNHgY9ncJuXX7_UP4MG24Aw&bih=712&biw=758&rlz=1C1CHBF_frTN918TN918#imgrc=utU-laYaDKAv-M' };

    return (
        <View style={styles.container}>
             
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
              </ImageBackground>
              
            <View style={styles.textContainer}>
                <Text style={[styles.title, {color : colors.text}]}> Update Your Profile Infos</Text>
            </View>
            <View style={styles.containerScroll}>
                <ScrollView style={styles.subContainer}>
                <TextInput label ="Email"
                        value ={userInfo.email}
                        onChangeText={(text) => {
                                setUserInfo({ email: text });}
                        }
                        outlined selectionColor="red"
                        style={styles.input}
                        keyboardType="email-address"/>
                    <TextInput
                        label="password"
                        value={userInfo.password}
                        onChangeText={(text) => {
                            setUserInfo({ password: text });
                        }}
                        outlined
                        style={styles.input}
                        secureTextEntry ={true}
                    />           
                </ScrollView>
            </View>
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
    containerScroll: {
        flex: 1,
        height: 300,
        marginBottom: 30,
    },
    subContainer: {
        width: 250,
        marginTop: 90,
    },
    title: {
        marginTop: 10,
        fontSize: 16,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        marginTop: 100,
    },
    input: {
        marginBottom: 10,
    },
});