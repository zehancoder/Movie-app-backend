import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../features/apiLayers/auth.api';

const initialState = {
    counter: 0,
    loginUser: { message: '', data: {} },
    registerUser: { message: '', data: {} },
    loading: false
}

export const reduxSlice = createSlice({
    name: 'movie website',
    initialState,
    reducers: {
        loginUserState: (state, action) => {
            state.loading = true;
        },
        loginUserSuccess: (state, action) => {
            state.loading = false
            state.loginUser.data = action.payload;
        },
        loginErrMsg: (state, action) => {
            state.loading = false;
            state.loginUser.message = action.payload
        },
        registerUserState: (state, action) => {
            state.loading = true;
        },
        registerUserSuccess: (state, action) => {
            state.loading = false;
            state.registerUser.data = action.payload;
        },
        registerErrMsg: (state, action) => {
            state.loading = false;
            state.registerUser.message = action.payload
        }
    }
});

export const { loginUserState, loginUserSuccess, loginErrMsg, registerErrMsg, registerUserState, registerUserSuccess } = reduxSlice.actions;
export default reduxSlice.reducer;