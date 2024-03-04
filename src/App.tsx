import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from './screens/signup';
import {PaperProvider} from 'react-native-paper';
import {VASLoginScreen} from './screens/VASLoginScreen';
import {VASVerifyPinScreen} from './screens/VASVerifyPinScreen';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './stores/Redux/store';
import {RootStackParamList} from './navigation/navigationTypes';
import TabContainer from './navigation/TabScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
              <Stack.Screen
                name="LoginScreen"
                component={VASLoginScreen}
                options={{title: '', headerShown: false}}
              />
              <Stack.Screen
                name="VASVerifyPinScreen"
                component={VASVerifyPinScreen}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="TabNav"
                component={TabContainer}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                  title: '',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
