import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import {logOut, reset} from '../../redux/reducers';
import {SESSION_ID} from '../../constants';
import {useTheme} from '../../theme';

export default function SignOut() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const signOut = async () => {
    await AsyncStorage.removeItem(SESSION_ID);
    dispatch(reset());
    dispatch(logOut());
  };

  return (
    <TouchableOpacity
      onPress={signOut}
      style={{
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: theme.colors.BLACK,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 70,
        right: 25,
      }}>
      <Ionicons name="log-out-outline" color={theme.colors.WHITE} size={25} />
    </TouchableOpacity>
  );
}
