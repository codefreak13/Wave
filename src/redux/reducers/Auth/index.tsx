import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface authState {
  loading: boolean;
  token: boolean;
  number: string;
  numberSuffix: string;
  validateNumber: boolean;
  tokenId: string;
  fullName: string;
}

const initialState: authState = {
  loading: false,
  token: false,
  number: '',
  numberSuffix: '',
  validateNumber: false,
  tokenId: '',
  fullName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authData: (state, {payload}) => {
      console.log(payload, 'snssj');
      state.number = payload.number || state.number;
      state.numberSuffix = payload.numberSuffix || state.numberSuffix;
      state.validateNumber = payload.validateNumber || state.validateNumber;
      state.tokenId = payload.tokenId || state.tokenId;
      state.fullName = payload.fullName || state.fullName;
    },
  },
});

const {
  actions: {authData},
} = authSlice;

export {authData};
export default authSlice.reducer;
