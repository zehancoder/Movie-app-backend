import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../features/apiLayers/auth.api';

const initialState = {
    counter: 0,
    loginUser: { message: '', data: {} },
    registerUser: { message: '', data: {} },
    loading: false,
    users: {
        success: false,
        data: []
    },
    toggleLeftMenu: false,
}

export const reduxSlice = createSlice({
    name: 'movie website',
    initialState,
    reducers: {
        // login user data and register user data handling
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
        },
        // handle users apis
        usersStoreState: (state, action) => {
            state.users.data = action.payload;
        },
        userstoreDataErr: (state, action)=> {
            state.users.success = action.payload;
        },
        // toggle left menu state
        leftMenuHandleState: (state, action) => {
            state.toggleLeftMenu = !state.toggleLeftMenu;
        }
    }
});

export const { loginUserState, loginUserSuccess, loginErrMsg, registerErrMsg, registerUserState, registerUserSuccess, usersStoreState, userstoreDataErr, leftMenuHandleState } = reduxSlice.actions;
export default reduxSlice.reducer;