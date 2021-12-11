import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import combinedReducers from "./rootReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;