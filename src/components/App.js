import React,{Component} from 'react';
// import HomeHear from "./HomeHear/HomeHear";
// import HomeDetail from "./HomeDetail/HomeDetail";
// import Footer from "../common/Footer/Footer";
// import MyHear from "./MyHear/MyHear";
// import MyList from "./MyList/MyList";
// import RankHear from "./RankHear/RankHear";
// import RankBanner from "./RankBanner/RankBanner";
// import RankDetail from "./RankDetail/RankDetail";

import Home from "./Home/Home";
import My from "./My/My";
import Rank from "./Rank/Rank";
import ServerShome from "./ServerShome/ServerShome";

import Error from "../common/Error/Error";
import Loading from "../common/Loading/Loading";
import User from "./User/User";
import Reg from "./Reg/Reg";

import Login from "./Login/Login";
import {Route,Redirect,Switch} from "react-router-dom";
import Footer from "../common/Footer/Footer";
import ShoppingAdress from "./ShoppingAdress/ShoppingAdress";
import Auth from "../guard/Auth";

import {connect} from "react-redux";
import * as types from "../store/types";

//发布订阅的组件
// import pubsub from 'pubsub-js';



class App extends Component{
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.location.pathname);

        let path = nextProps.location.pathname;
        this.watchRouter(path)
    }
    //监听路由（也就是当前的状态）
    watchRouter(path){
        let {viewFoot} = this.props;
        if (/home|my|rank|servershome/.test(path)) {
            // this.setState({bFoot:true})
            viewFoot(true);
        }
    }
    componentDidMount(){
        let path = this.props.location.pathname;
        this.watchRouter(path)
    }


    render(){
        let {bFoot,bLoading} = this.props;
        return(
            <>
                {bLoading && <Loading/>}

                <Switch>
                    <Route path="/home" component={Home} />

                    <Route path="/my" component={My} />

                    <Route path="/rank" component={Rank} />
                    <Route path="/servershome" component={ServerShome} />
                    <Route path="/shoppingadress" component={ShoppingAdress} />

                    <Auth path="/user" component={User} />

                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Error} />

                    {/*<Rank/>*/}
                    {/*<Footer/>*/}
                </Switch>

                {/*加上this.state.bFoot式防止出现强刷的状态 因为有的地方没有Footer 强行刷新会有footer消失的状况*/}
                {bFoot &&<Footer/>}

            </>

        )
    }
}

const initMapStateToProps = state=>({
    bFoot:state.bFoot,
    bLoading:state.bLoading,
})
const initMapDispatchToProps=dispatch=>({
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
) (App);