import React from 'react';
import ReactDOM from 'react-dom';
//12
import { Provider  } from 'react-redux'
import './index.css';
import App from './App';

//11
import store from './store'


ReactDOM.render(
    //13
    <Provider store = {store}></Provider><App />,
    document.getElementById('root'));

    //store koppelen aan applicatie
    //react-redux gebruikt props om data binnen te sturen naar de components

