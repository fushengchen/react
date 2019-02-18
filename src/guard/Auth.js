import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'



// class Auth extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             hasAuth:false,
//             auth:false,
//             data:null
//         }
//     }
//     componentDidMount() {
//         fetch(
//             `/data/user.json`
//         ).then(
//             res=>res.json()
//         ).then(
//             res=>{
//                 this.setState({auth:res.auth,hasAuth:true,data:res.data})
//             }
//         )
//     }
//
//     render(){
//         if(!this.state.hasAuth) return null;
//         let {component:Component,...rest}=this.props;
//         return <Route {...rest} render={(props)=>
//             this.state.auth ?
//                 <Component data={this.state.data} {...props}/>:
//                 <Redirect to="/login"/>
//         }/>
//     }
// }

//同步条件
const Auth = ({ component: Component,auth, ...rest }) => (
    <Route {...rest} render={props =>
        auth ?
            <Component {...props} />
            : <Redirect to="/login" />
    }
    />
);



const initMapStateToProps=state=>({
    auth:state.user.auth
});
const initMapDispatchToProps=dispatch=>({
});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Auth);