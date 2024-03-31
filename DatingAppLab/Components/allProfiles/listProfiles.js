import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    } from "react-native";
    import React from "react";
    import { useEffect, useState } from "react";
    import axios from "axios";
    import uuid from "react-native-uuid";
import User from "../top10people/User";
    export default function ListProfiles() {
    const [state, setData] = useState([]);
    const url = "https://randomuser.me/api/?results=50";
    useEffect(() => {
    axios
    .get(url)
    .then((res) => {
    setData(res.data.results);
    })
    .catch((err) => {
    console.log(err);
    });
    }, []);
    const renderProfile = () =>
    state.map((elt) => (
    <User
    key={uuid.v4()}
    cellPhone={elt.cell}
    emailUser={elt.email}
    ageUser={elt.dob.age}
    countryUser={elt.state}
    firstName={elt.name.first}
    lastName={elt.name.last}
    pictureUser={elt.picture.medium}
    />
    ));
    return (
    <View>
    {state.length === 0 ? (
    <ActivityIndicator size="large" color="pink" />
    ) : (
    <View style={styles.container}>
    <FlatList
    data={state}
    renderItem={renderProfile}
    style={{ marginTop: 100 }}
    />
    </View>
    )}
    </View>
    );
    }
    const styles = StyleSheet.create({
    Container: {
    height: 425,
    marginTop: 100,
    },
    });