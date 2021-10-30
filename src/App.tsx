import 'react-native-gesture-handler';
import React, {Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {AppGQLHealthCheckQuery} from './__generated__/AppGQLHealthCheckQuery.graphql';
import {environment} from './relay_environment';
import Screens from './navigation';
import {RFValue} from 'react-native-responsive-fontsize';
import {Provider} from 'react-redux';
import {store} from './redux';

const gqlHealthCheck = graphql`
  query AppGQLHealthCheckQuery {
    now
  }
`;

function GqlHealthCheck() {
  const response = useLazyLoadQuery<AppGQLHealthCheckQuery>(gqlHealthCheck, {});

  return (
    <View>
      <Text style={styles.p}>data: {JSON.stringify(response, null, 4)}</Text>
    </View>
  );
}

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.p}>Welcome! The graphql server lives at</Text>
      <Text style={styles.a}>
        http://167.172.52.80:9090/graphql?api_key=YOUR_API_KEY
      </Text>
      <Text style={styles.p}>
        We suggest going to that link in your browser to explore the API with
        GraphiQL
      </Text>
      <Text style={styles.p}>
        Check the Google doc in the invite for specs + pictures of the screens
        we're going to implement
      </Text>
      <Text style={styles.p}>
        This repo is yours to change as you wish! Good luck :-)
      </Text>
      <GqlHealthCheck />
    </ScrollView>
  );
}

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Provider store={store}>
          <SafeAreaView style={{flex: 1, marginTop: RFValue(30)}}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="#f5f5f5"
              translucent={true}
            />
            <Screens />
          </SafeAreaView>
        </Provider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  p: {
    marginVertical: 8,
    color: 'black',
  },
  a: {
    color: 'dodgerblue',
    marginVertical: 8,
    paddingLeft: 32,
  },
  p_indent: {
    marginVertical: 8,
    marginLeft: 32,
    color: 'black',
  },
});
