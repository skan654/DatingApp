import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme,StyleSheet } from 'react-native';
import { DefaultTheme,DarkTheme } from '@react-navigation/native';
import AllProfilesMain from './assets/Components/allProfiles/allProfiles';
import AllCharacteristics from './assets/Components/char/allCharacterstics';
import Top10Main from './assets/Components/top10people/top10main';
import Form from './assets/Components/Form';
const Stack = createStackNavigator();
export default function App() {
const scheme = useColorScheme();
console.log(scheme);
return (
<NavigationContainer theme={scheme === 'light' ? styles.LightTheme :
styles.DarkTheme }>
<Stack.Navigator screenOptions={{headerShown:false}}
initialRouteName="AllProfilesMain">
<Stack.Screen name="form" component={Form} />
<Stack.Screen name="Profiles" component={AllProfilesMain} />
<Stack.Screen name="Top10" component={Top10Main} />
<Stack.Screen name="Traits" component={AllCharacteristics} />
</Stack.Navigator>
</NavigationContainer>
);
}
const styles=StyleSheet.create({
Light : {
...DefaultTheme,
dark: true,
Colors: {
...DefaultTheme.colors,
text:"black",
background: '#ffffff',
}
},
Dark : {
...DarkTheme,
dark: false,
colors: {
...DarkTheme.colors,
text:"white",
background: 'black',
},
}
}
);