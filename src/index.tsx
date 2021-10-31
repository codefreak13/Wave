import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {SafeAreaView, StatusBar} from 'react-native';
import {environment} from './relay_environment';
import Screens from './navigation';
import {RFValue} from 'react-native-responsive-fontsize';
import {Provider} from 'react-redux';
import {store} from './redux';
import {Loader} from './components';

export default function App() {
  return (
    <Provider store={store}>
      <RelayEnvironmentProvider environment={environment}>
        <SafeAreaView style={{flex: 1, marginTop: RFValue(20)}}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#f5f5f5"
            translucent={true}
          />
          <Suspense fallback={<Loader />}>
            <Screens />
          </Suspense>
        </SafeAreaView>
      </RelayEnvironmentProvider>
    </Provider>
  );
}
