import React from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import App from './App';


//Reducers
import authReducer from './controller/redux/authSlice'
import bugReducer from './controller/redux/bugslice'
import userReducer from './controller/redux/userSlice'

//redux configure
const reducer =combineReducers({
    auth:authReducer,
    bugs:bugReducer,
    user:userReducer,
})

const store= configureStore({
    reducer

})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />,

    </Provider>
    
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);



