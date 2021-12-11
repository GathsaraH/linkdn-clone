import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from "./util/routes";
import store from "./store";
import {Provider as Providers} from "react-redux";

const Stack = createStackNavigator();


function App(props) {
    return (
        <Providers store={store}>
            <Routes/>
        </Providers>
    );
}

export default App;
