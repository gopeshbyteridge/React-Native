import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginScreen} from './login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditScreen} from './editScreen';
import {SignUpScreen} from './signup';

const Stack = createNativeStackNavigator();

export const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 50,
  },
  textInput: {
    marginVertical: 10,
  },
});
