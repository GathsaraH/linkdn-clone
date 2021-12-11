import {combineReducers} from 'redux';
import userLoginReducer from './app/screen/LoginSceen/reducer/reducer'
import authReducer from './app/screen/LoginSceen/reducer/Authreducer'
import profileReducer from './app/screen/Profile/Reducer/reducer'

export default combineReducers({
    userLoginReducer,
    authReducer,
    profileReducer
})