import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();
import Cf2 from './files/cf2';
import Cf3 from './files/cf3';
export default function MyStack(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Mediator" component={Cf2} />
      <Stack.Screen 
      options={{
          headerShown:false
        }}
      name="Sigin" component={Signin} />
      <Stack.Screen name="Login" component={Cf3} 
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


