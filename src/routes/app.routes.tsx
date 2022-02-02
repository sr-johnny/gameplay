import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const Stack = createNativeStackNavigator();

export function AppRoutes(){
    return(
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors.secondary100 }
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
        <Stack.Screen
          name="AppointmentCreate"
          component={AppointmentCreate}
        />
      </Stack.Navigator>
      </NavigationContainer>
    );
}
