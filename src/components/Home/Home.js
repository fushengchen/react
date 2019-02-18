import React,{Component} from 'react';
import "./Home.css";
import HomeHear from "../HomeHear/HomeHear"
import HomeDetail from "../HomeDetail/HomeDetail";
import ReactSwipe from 'react-swipe';
import querystring from 'query-string'

import {connect} from 'react-redux'
import * as types from "../../store/types";
import asyncList from "../../store/actions/anynList";

import pubsub from "pubsub-js";

class Home extends Component{
    constructor(props){
        super();
        props.get();
    }
    render(){
        //let是展示数据
        let {home}=this.props;
        return(
            <div>
                <HomeHear/>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true ,
                        auto:1000,
                    }}
                >
                    <div style={{background:'#399','lineHeight':'150px'}}>PANE 1</div>
                    <div style={{background:'#939','lineHeight':'150px'}}>PANE 2</div>
                    <div style={{background:'#393','lineHeight':'150px'}}>PANE 3</div>
                </ReactSwipe>
                {/*将回来的home数据在这边展示*/}
                <HomeDetail list={home} dataName="home" />
                {/*<HomeDetail list={this.state.list} dataName="home"/>*/}
            </div>
        )
    }
}
//回来后的数据 给home
const initMapStateToProps=state=>({
    home:state.home
});
//请求数据 具体是get去请求数据
const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
        url:'/data/home.data',
        type:types.UPDATE_HOME
    }))
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);

// export default Home;