import {createSlice} from '@reduxjs/toolkit';

export interface authState {
  loading: boolean;
  number: string;
  numberSuffix: string;
  validateNumber: boolean;
  tokenId: string;
  fullName: string;
  secretCode: string;
  sessionId: boolean;
}

const initialState: authState = {
  loading: false,
  number: '',
  numberSuffix: '',
  validateNumber: false,
  tokenId: '',
  fullName: '',
  secretCode: '',
  sessionId: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authData: (state, {payload}) => {
      state.number = payload.number || state.number;
      state.numberSuffix = payload.numberSuffix || state.numberSuffix;
      state.validateNumber = payload.validateNumber || state.validateNumber;
      state.tokenId = payload.tokenId || state.tokenId;
      state.fullName = payload.fullName || state.fullName;
      state.secretCode = payload.secretCode || state.secretCode;
      state.sessionId = payload.sessionId ? true : state.sessionId;
    },
  },
});

const {
  actions: {authData},
} = authSlice;

export {authData};
export default authSlice.reducer;
