import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../features/apiLayers/auth.api';

const initialState = {
    // login & register state
    loginUser: { message: '', data: {} },
    registerUser: { message: '', data: {} },
    loading: false,
    // get users state
    users: {
        success: false,
        data: []
    },
    // toggle left menu state
    toggleLeftMenu: false,
    // search movie state
    searchMovies: [],
    //admin movies state
    adminMovies: {
        message: '',
        data: []
    },
    // error msg
    errMessage: '',
    likeMovies: {
        data: [],
        message: ''
    }
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
        userstoreDataErr: (state, action) => {
            state.users.success = action.payload;
        },
        // toggle left menu state
        leftMenuHandleState: (state, action) => {
            state.toggleLeftMenu = !state.toggleLeftMenu;
        },
        // search movies states
        searchDataState: (state, action) => {
            state.searchMovies = action.payload;
        },
        // admin movies geeting state
        adminMoviesState: (state, action) => {
            state.adminMovies.data = action.payload;
        },
        adminMoviesStateMessage: (state, action) => {
            state.adminMovies.message = action.payload
        },
        // error message handling
        errorMsgState: (state, action) => {
            state.errMessage = action.payload;
        },
        // like movies
        likeMoviesState: (state, action) => {
            state.likeMovies.data = action.payload;
            
        }
    }
});

export const { loginUserState, loginUserSuccess, loginErrMsg, registerErrMsg, registerUserState, registerUserSuccess, usersStoreState, userstoreDataErr, leftMenuHandleState, searchDataState, adminMoviesState, adminMoviesStateMessage, errorMsgState, likeMoviesState } = reduxSlice.actions;
export default reduxSlice.reducer;