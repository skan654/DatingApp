import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../User/User';

export default function Welcome() {
    const [state, setData] = useState([]);
    const url = "https://randomuser.me/api/?results=10";
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
    // const topTrending= state.slice(1,10);
    return (
        <ScrollView style={styles.container}>
            {state.length === 0 ? (
                <Text>loading...</Text>
            ) : (
                state.map((elt) =>
                    <User
                        key={elt.id}
                        cellPhone={elt.cell}
                        emailUser={elt.email}
                        genderUser={elt.gender}
                        firstName={elt.name.first}
                        lastName={elt.name.last}
                        pictureUser={elt.picture.medium}
                    />)
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:
    {
        maxHeight: 400,
        
        marginLeft: 20,
        marginTop: 20,
        height: 10,
    },
});