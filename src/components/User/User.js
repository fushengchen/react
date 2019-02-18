import React from 'react';

export default class User extends React.Component{
    render(){
        return(
            <div className="User">
                <h3>user</h3>
                <div>{this.props.data.username}</div>
            </div>
        )
    }
}

