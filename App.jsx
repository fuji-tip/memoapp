import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';

import MemoListScreen from './src/screens/MemoListScreen.jsx';
import MemoDetailScreen from './src/screens/MemoDetailScreen.jsx';
import MemoEditScreen from './src/screens/MemoEditScreen.jsx';
import MemoCreateScreen from './src/screens/MemoCreateScreen.jsx';
import LogInScreen from './src/screens/LogInScreen.jsx';
import SignUpScreen from './src/screens/SignUpScreen.jsx';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

import { firebaseConfig } from './env.js';

const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
