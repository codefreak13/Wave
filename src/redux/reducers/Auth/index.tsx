import {createSlice} from '@reduxjs/toolkit';

export interface authState {
  loading: boolean;
  number: string;
  numberSuffix: string;
  validateNumber: boolean;
  tokenId: string;
  fullName: string;
  sessionId: boolean;
}

const initialState: authState = {
  loading: false,
  number: '',
  numberSuffix: '',
  validateNumber: false,
  tokenId: '',
  fullName: '',
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
      state.sessionId = payload.sessionId ? true : state.sessionId;
    },
    logOut: state => {
      state.sessionId = false;
    },
    reset: () => initialState,
  },
});

const {
  actions: {authData, logOut, reset},
} = authSlice;

export {authData, logOut, reset};
export default authSlice.reducer;
