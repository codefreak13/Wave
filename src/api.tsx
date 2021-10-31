import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVER_IP = '167.172.52.80';
const SERVER_PORT = '9090';
const API_KEY = 'fdwjtea';

class Api {
  url = async () => {
    try {
      let SESSION_ID: any = await AsyncStorage.getItem('sessionId');
      SESSION_ID = SESSION_ID || '';
      console.log(SESSION_ID, 'SESSION_IDSESSION_IDSESSION_ID');
      const res = `http://${SERVER_IP}:${SERVER_PORT}/graphql?api_key=${API_KEY}&SESSION_ID=${SESSION_ID}`;
      return res;
    } catch (err) {
      throw err;
    }
  };
}

export default new Api();
