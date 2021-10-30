import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ThemeProvider from '../theme';

import {Home} from '../Views/App';
import {CodeValidation, Name, SecretCode, SignUpNumber} from '../Views/Auth';

export type MainStackParamList = {
  Home: undefined;
};

export type AuthStackParamList = {
  CodeValidation: undefined;
  Name: undefined;
  SecretCode: undefined;
  SignUpNumber: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

export default function App() {
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: any;

      try {
        // userToken = await AsyncStorage.getItem('token');
      } catch (e) {}
    };
    bootstrapAsync();
  }, []);

  const token = false;

  return (
    <ThemeProvider>
      <NavigationContainer>
        {token ? (
          <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              headerStyle: {elevation: 0},
              cardStyle: {backgroundColor: 'white'},
            }}>
            <MainStack.Screen name="Home" component={Home} />
          </MainStack.Navigator>
        ) : (
          <AuthStack.Navigator
            initialRouteName="SignUpNumber"
            screenOptions={{
              headerShown: false,
              headerStyle: {elevation: 0},
              cardStyle: {backgroundColor: 'white'},
            }}>
            <AuthStack.Screen
              name="CodeValidation"
              component={CodeValidation}
            />
            <AuthStack.Screen name="Name" component={Name} />
            <AuthStack.Screen name="SecretCode" component={SecretCode} />
            <AuthStack.Screen name="SignUpNumber" component={SignUpNumber} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
