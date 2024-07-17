import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './src/screens/RegisterScreen';
import GetUserScreen from './src/screens/GetUserScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="GetUser" component={GetUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
 