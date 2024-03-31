import React, { useState } from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";
import { Text, Card } from "@rneui/themed";
import { faker } from "@faker-js/faker";
import Modal from 'react-native-modal';
import axios from "axios";

export default function User({
    firstName,
    lastName,
    pictureUser,
    cellPhone,
    countryUser,
    ageUser,
}) {
    const [quote, setQuote] = useState("");
    const url = "https://api.quotable.io/random?tags=love";
    const quotes = () => {
        axios
            .get(url)
            .then((res) => {
                setQuote(res.data.content);
                console.log(quote);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        quotes();
        setModalVisible(!isModalVisible);
        console.log(isModalVisible);
    };
    return (
        <View>
            <Card containerStyle={{ borderRadius: 30, shadowRadius: 10 }}>
                <Card.Title>
                    <View
                        style={{
                            width: 250,
                            height: 25,
                            fontSize: 14,
                            backgroundColor: '#ffffff',
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Pressable onPress={toggleModal}>
                            <Image
                                source={{
                                    uri: "https:www.shutterstock.com/image-illustration/plus-signcolor-blue-260nw-335796956.jpg",
                                }}
                                style={{
                                    borderRadius: 50,
                                    width: 40,
                                    height: 30,
                                    marginLeft: 30,
                                    marginTop: 8,
                                }}
                            />
                        </Pressable>
                        <Text
                            style={{
                                fontWeight: "bold",
                                marginLeft: 40,
                                color: "#6495ED",
                                marginTop: 5,
                            }}
                        >
                            {firstName} {lastName}
                        </Text>
                    </View>
                </Card.Title>
                <Card.Divider/>
                <View style={{ flexDirection: "row" }}>
                    <Card.Image
                        style={{
                            width: 90,
                            marginHorizontal: 9,
                            height: 100,
                            borderRadius: 80,
                        }}
                        source={{
                            uri: pictureUser,
                        }}
                    />
                    <View>
                        <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
                            Phone: <Text style={{ fontWeight: "500" }}>{cellPhone}</Text>
                        </Text>
                        <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
                            Country:{" "}
                            <Text style={{ fontWeight: "500" }}>
                                {faker.address.country()}
                            </Text>
                        </Text>
                        <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
                            Age: <Text style={{ fontWeight: "500" }}>{ageUser}</Text>
                        </Text>
                        <Text style={{ marginTop: 10, fontSize: 12, fontWeight: "bold" }}>
                            Job:
                            <Text style={{ fontWeight: "500" }}>{faker.name.jobType()}</Text>
                        </Text>
                    </View>
                </View>
            </Card>
            <Modal
                style={{
                    backdropOpacity: 0.1,
                    animationIn: "slideInUp",
                    coverScreen: "true",
                    hasBackdrop: "true",
                }}
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(!isModalVisible)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Hi, My name is{" "}
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {firstName}
                        </Text>
                    </Text>
                    <Image
                        source={{ uri: pictureUser }}
                        style={{
                            height: 130,
                            width: 130,
                            resizeMode: "contain",
                            borderRadius: 50,
                        }}
                    />
                    <Text style={styles.modalQuote}> "{quote}"</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={{
                                uri:
                                    "https://i.pinimg.com/564x/6c/f2/dd/6cf2dda53700582bf836ef0333785ec1.jpg",
                            }}
                            style={styles.socialMediaIcons}
                        />
                        <Image
                            source={{
                                uri:
                                    "https://i.pinimg.com/564x/6c/ac/af/6cacaf8325f5c4138c1b371d59722916.jpg",
                            }}
                            style={styles.socialMediaIcons}
                        />
                        <Image
                            source={{
                                uri:
                                    "https://i.pinimg.com/564x/8e/64/f3/8e64f3086daea43a5a866f6eb6675df5.jpg",
                            }}
                            style={styles.socialMediaIcons}
                        />
                        <Image
                            source={{
                                uri:
                                    "https://i.pinimg.com/564x/e5/61/62/e561628e1729cffd1807586ba771397f.jpg",
                            }}
                            style={styles.socialMediaIcons}
                        />
                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!isModalVisible)}
                    >
                        <Text style={styles.textStyle}>close</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    MV: {
        marginTop: 60,
        alignItems: "center",
        height: 450,
        width: 290,
        elevation: 5,
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        justifyContent: "space-between",
    },
    Button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    Close: {
        backgroundColor: "#2196F3",
        marginTop: 10,
    },
    Style: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    Text: {
        marginBottom: 15,
        textAlign: "center",
        marginTop: 5,
        fontFamily: "Thonburi",
    },
    Quote: {
        fontFamily: "Verdana",
        marginBottom: 15,
        textAlign: "center",
        marginTop: 10,
        fontSize: 12,
        fontWeight: "bold",
    },
    AllIcons: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        marginRight: 5,
        marginTop: 15,
        marginBottom: 10,
    },
});
