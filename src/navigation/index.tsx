import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import ThemeProvider from '../theme';
import {RootState} from '../redux';
import {authData} from '../redux/reducers';
import {Home} from '../Views/App';
import {
  CodeValidation,
  Name,
  SecretCode,
  SignUpNumber,
  ConfirmSecretCode,
} from '../Views/Auth';
import {SESSION_ID} from '../constants';

export type MainStackParamList = {
  Home: undefined;
};

export type AuthStackParamList = {
  CodeValidation: undefined;
  Name: undefined;
  SecretCode: {secretCode: string};
  SignUpNumber: undefined;
  ConfirmSecretCode: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

export default function App() {
  const {sessionId} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let sessionId: string | null;

      try {
        sessionId = await AsyncStorage.getItem(SESSION_ID);
        sessionId && dispatch(authData({sessionId}));
      } catch (e) {}
    };
    bootstrapAsync();
  }, []);
  return (
    <ThemeProvider>
      <NavigationContainer>
        {sessionId ? (
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
            <AuthStack.Screen
              name="ConfirmSecretCode"
              component={ConfirmSecretCode}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
