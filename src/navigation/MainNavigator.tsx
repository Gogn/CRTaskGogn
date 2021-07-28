import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Connections, Booking} from 'src/screens';
import {t} from '@translations';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Connections'}
          component={Connections}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'BookingScreen'}
          component={() => <Booking />}
          options={{title: t.myBooking.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
