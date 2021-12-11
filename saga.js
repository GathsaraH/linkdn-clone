import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import * as loginActionType from './app/screen/LoginSceen/action/actionTypes'
import * as profileActionType from './app/screen/Profile/actions/actionTypes'
import {
    addGoogleUser,
    addUserPassMail,
    getCurrentUser,
    getUserID,
    getUserToken,
    loginUser,
    logOutUser,
} from "./app/screen/LoginSceen/saga/LoginFlow";
import {getProfileUserData, getUserData, uploadProfile} from "./app/screen/Profile/saga/profileFlow";
import {GET_ALL_USER_DATA} from "./app/screen/Profile/actions/actionTypes";


export default function* root() {
    yield all([

        //Login Flow
        takeEvery(loginActionType.ADD_USER_GOOGLE_LISTENER, addGoogleUser),
        takeEvery(loginActionType.ADD_USER_LISTENER, addUserPassMail),
        takeEvery(loginActionType.LOGIN_USER_LISTENER, loginUser),
        takeLatest(loginActionType.GET_USER_ID_LISTENER, getUserID),
        takeLatest(loginActionType.GET_USER_TOKEN_LISTENER, getUserToken),
        takeLatest(loginActionType.GET_CURRENT_USER, getCurrentUser),
        takeLatest(loginActionType.LOG_OUT_USER_LISTENER, logOutUser),
        takeLatest(loginActionType.GET_CURRENT_USER, getCurrentUser),

        //Profile Flow
        takeLatest(profileActionType.GET_USER_DATA_WATCHER, getUserData),
        takeEvery(profileActionType.UPLOAD_PROFILE_IMAGE_WATCHER, uploadProfile),
        takeEvery(profileActionType.GET_ALL_USER_DATA, getProfileUserData),

    ])
}