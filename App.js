import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaymentOptions from './files/PaymentOptions';
import Welcome2 from './files/Welcome2';
import Login from './files/Login';
import Signin from './files/Signin';
import Mediator from './files/Mediator';
import RechargeScreen from './files/RechargeScreen';
import Cf21 from './files/Cf21';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="RechargeScreen" component={RechargeScreen} />
      <Stack.Screen name="Mediator" component={Mediator} />
      <Stack.Screen name="cf21" component={Cf21} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

