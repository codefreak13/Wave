import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SESSION_ID as ID} from './constants';

const SERVER_IP = '167.172.52.80';
const SERVER_PORT = '9090';
const API_KEY = 'fdwjtea';

async function fetchQuery(
  operation: any,
  variables: any,
  cacheConfig: any,
  uploadables: any,
): Promise<any> {
  const headers: Record<string, string> = {};

  let SESSION_ID = await AsyncStorage.getItem(ID);
  SESSION_ID = SESSION_ID || '';

  const url = `http://${SERVER_IP}:${SERVER_PORT}/graphql?api_key=${API_KEY}&session_id=${SESSION_ID}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({
      query: operation.text,
      variables: variables,
    }),
  });

  return await response.json();
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
