import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login';
import Homepage from '../screens/Homepage';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import { Colors } from '../components/styles';
import { StyleSheet } from 'react-native';
import History from '../screens/History';

const Tab = createBottomTabNavigator();
const { primary } = Colors;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Styles.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {
          var iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: primary,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
