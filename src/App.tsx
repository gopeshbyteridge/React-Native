import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {MainScreen} from './screens/mainscreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditScreen} from './screens/editScreen';
import {SignUpScreen} from './screens/signup';
import {LoginScreen} from './screens/login';
import {PaperProvider} from 'react-native-paper';
import {HomeScreen} from './screens/HomePage';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 50,
  },
  textInput: {
    marginVertical: 10,
  },
});
export default App;
