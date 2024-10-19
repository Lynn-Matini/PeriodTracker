import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeProvider } from './components/src/ThemeContext';

import CalendarScreen from './components/src/screens/CalendarScreen';
import Encyclopedia from './components/src/screens/Encyclopedia';
import AccessSettings from './components/src/screens/AccessSettings';
import ProfileScreen from './components/src/screens/ProfileScreen';

import AboutScreen from './components/src/screens/TrackerSettings/AboutScreen';
import TermsConditionsScreen from './components/src/screens/TrackerSettings/TermsConditionsScreen';
import PrivacyPolicyScreen from './components/src/screens/TrackerSettings/PrivacyPolicyScreen';
import AccessSettingsScreen from './components/src/screens/TrackerSettings/AccessSettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={AccessSettings} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen
        name="TermsConditionsScreen"
        component={TermsConditionsScreen}
      />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="AccessSettingsScreen"
        component={AccessSettingsScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Profile') {
                iconName = 'account-outline';
              } else if (route.name === 'Calendar') {
                iconName = 'calendar';
              } else if (route.name === 'Encyclopedia') {
                iconName = 'book-outline';
              } else if (route.name === 'Settings') {
                iconName = 'cog-outline';
              }
              return <Icon name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: '#FF9FF3',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Encyclopedia" component={Encyclopedia} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
