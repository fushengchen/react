//reducer 是一个纯函数 （也就是函数里面是是不可以重新定义，只能是修改状态）
import * as types from './types'
const reducer = (state,{type,payload}) => {
    switch (type) {
        case types.VIEW_FOOT:
            //上面的是自己定义通过types传过来的 ...state 是表示解构
            //return {}表示返回结构后和bFoot修改后的内容
            return {
                ...state,
                bFoot:payload
            };

        case types.VIEW_LOADING:
            return {
                ...state,
                bLoading:payload
            };
        case types.VIEW_HOMEDETAIL:
            return {
                ...state,
                bLoading:payload
            };

        case types.UPDATE_HOME:
            return {
                ...state,
                home:payload
            };


        case types.UPDATE_DETAIL:
            console.log('reducer',payload);
            return {
                ...state,
                detail:payload.data[payload.id-1]
            };

        case types.CHECK_USER:
            return {
                ...state,
                user:payload
            };


        default:
            return state
        }
};

export default  reducer;