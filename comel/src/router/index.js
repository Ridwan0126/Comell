import React, {useEffect} from 'react';
import {
  SignIn,
  SignUp,
  SignUpAddess,
  SplashScreen,
  SuccessSignUp,
  Home,
  Order,
  Profile,
} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Order"
        component={Order}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUpAddress"
        component={SignUpAddess}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SuccessSignUp"
        component={SuccessSignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MainApp"
        component={MainApp}
      />
    </Stack.Navigator>
  );
};

export default Router;
