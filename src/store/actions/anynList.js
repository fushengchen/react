import * as types from '../types';
//引进类型用来修改部分组件的状态
const asyncList=({type,url,start,count,id,params})=>(dispatch,getState)=>{

    dispatch({type:types.VIEW_LOADING,payload:true});

    fetch(
        url,
        {
            params:params
        }
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            if (id){
                dispatch({
                    type:type,
                    payload:{data,id}
                })
            } else {
                dispatch({type:type,payload:data})

            }
            // dispatch({type:types.VIEW_LOADING,payload:false});
            // dispatch({type:types,payload:data});
        }
    )
};


export default asyncList;
