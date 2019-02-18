import React from 'react';
import {Prompt} from 'react-router-dom'; //后置守卫

export default class Reg extends React.Component{
    render(){
        return(
            <div className="Reg">
                <h3>reg</h3>
                <Prompt
                    when={true}
                    // message={'提示信息'}
                    message={(location)=>'提示信息${location.pathname}'}
                />
            </div>
        )
    }
}

