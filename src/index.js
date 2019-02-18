import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/base.css'; //引入公共样式
import './assets/css/style.css';
import App from "./components/App";
import {BrowserRouter,Route} from "react-router-dom";

import store from "./store";
import {Provider} from 'react-redux';


ReactDOM.render(
    //这边加上provider标签是为了状态管理下面的任何数据 任何页面都是可以拿到
    <Provider store={store}>
        <BrowserRouter >
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

