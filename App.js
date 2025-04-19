import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CalendarScreen from './screens/CalendarScreen';
import ClashResolutionScreen from './screens/ClashResolution';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Manage Me Demo' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendar' }} />
        <Stack.Screen name="ClashResolution" component={ClashResolutionScreen} options={{ title: 'Resolve Clashes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}