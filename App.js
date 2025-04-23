import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import CalendarScreen from './screens/CalendarScreen';
import ClashResolutionScreen from './screens/ClashResolutionScreen';
import ClashDrawerScreen from './screens/ClashDrawerScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Manage Me Demo' }} />
    <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendar' }} />
    <Stack.Screen name="ClashResolution" component={ClashResolutionScreen} options={{ title: 'Resolve Clashes' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen 
          name="Main" 
          component={MainStackNavigator} 
          options={{ title: 'Home' }} 
        />
        <Drawer.Screen 
          name="ClashDrawer" 
          component={ClashDrawerScreen} 
          options={{ title: 'Event Clashes' }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}