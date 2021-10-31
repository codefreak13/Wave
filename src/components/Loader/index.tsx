import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => {
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
        backgroundColor: 'white',
      }}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default Loader;
