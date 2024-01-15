import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Homepage from './screens/Homepage';
import Opencam from './screens/Opencam';
import Navigation from './screens/Navigation';
import TabNavigator from './navigators/TabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}
        ></Stack.Screen>
        <Stack.Screen name="Login" component={Login} options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
