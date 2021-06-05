import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';


const Stack = createStackNavigator();

import Signin from './Signin'
import Login from './Login'
import Mediator from './Mediator';
export default function MyStack(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Mediator" component={Mediator} />
      <Stack.Screen 
      options={
        {
          headerStyle:{
            backgroundColor:"#337CEC"
          }
        }
      }
      name="Sigin" component={Signin} />
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
    height:"100%",
    width:"100%"
    },
    flat:{
      height:100,
      backgroundColor:"pink",
    }
  });


