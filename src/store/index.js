import {createStore,applyMiddleware} from 'redux';
import reducer from "./reducer";
import state from "./state";
import thunk from 'redux-thunk';
//createSrore可以接收三个参数  第一个reducer 第二个state 第三到第N个 中间件
let store = createStore(
    reducer,
    state,
    applyMiddleware(thunk)
);
export default store;