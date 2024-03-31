import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Card } from "@rneui/themed";


export default function User({ firstName, lastName, pictureUser, cellPhone }) {
return (
<Card>
<Card.Title>
{firstName} {lastName}
</Card.Title>
<Card.Divider />
<Card.Image
style={{ width: 200, marginHorizontal: 10 }}
source={{
uri: pictureUser
}}
/>
<Text style={{ marginTop: 10 }}>Cell-Phone: {cellPhone}</Text>
</Card>
)}