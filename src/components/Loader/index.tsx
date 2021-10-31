import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useTheme} from '../../theme';

const Loader = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 100000,
        position: 'relative',
        top: 0,
        bottom: 0,
        zIndex: 999999999999999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.WHITE,
      }}>
      <ActivityIndicator size={'large'} color={theme.colors.SKY_BLUE} />
    </View>
  );
};

export default Loader;
