import React,{Component} from 'react';
import "./MyHear.css";
import pic1 from '../../assets/img/pic1.png';

import connect from "react-redux/es/connect/connect";

class MyHear extends Component{
    logout(){
        //  求后端 删cookie ->返回结果 -> 前端跳转 this.props.history.push(...
    }
    render(){
        let {list} = this.props;
        console.log(list);
        return(

            <>
                <div className="mycenter_top">
                    <div className="baseinfo">
                        <div className="myimg">
                            <a href="javascript:;">
                                <img src={pic1}/>

                                <h3><span className="nc">ID:154554656</span></h3>
                                {/*{this.props.list.data.username?*/}
                                    {/*<h3><span className="nc">{this.props.list.data.username}</span></h3>:*/}
                                    {/*<h3><span className="nc">{null}</span></h3>*/}
                                {/*}*/}
                                {/*<h3><span className="nc">{this.setState(list.data.username)}</span></h3>*/}
                                <div className="dj">158256126355</div>
                                <div className="dj" onClick={this.logout.bind(this)}>注销</div>
                            </a>
                        </div>
                        <div className="qd"><i className="icons">&#xe60e;</i>金币:255</div>
                    </div>
                    <ul className="ctlist">
                        <li><a href="orders.html"><i className="icons">&#xe6aa;</i><p>订单</p></a></li>
                        <li><a href="dh.html"><i className="icons">&#xe60d;</i><p>兑换</p></a></li>
                        <li><a href="cz.html"><i className="icons">&#xe6b9;</i><p>充值</p></a></li>
                        <li><a href="tx.html"><i className="icons">&#xe60a;</i><p>提现</p></a></li>
                    </ul>
                </div>
            </>
        )
    }
}
const initMapStateToProps=state=>({
    username:state.user.data.username
});
const initMapDispatchToProps=dispatch=>({
});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(MyHear);
// export default MyHear;