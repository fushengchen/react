import React,{Component} from 'react';
import './ServerShome.css';
import e from "../../assets/img/e.png"

class ServerShome extends Component{
    render(){
        return(
            <>
                <div className="fixed_top">
                    <div className="top-l"></div>
                    <h1>客服</h1>
                </div>

                <div className="container">
                    <ul className="bzzx">
                        <li>
                            <a href="javascript:;">支付方式</a>
                            <i className="icons">&#xe601;</i>
                        </li>
                        <li>
                            <a href="javascript:;">配送方式</a>
                            <i className="icons">&#xe601;</i>
                        </li>
                        <li>
                            <a href="javascript:;">售后服务</a>
                            <i className="icons">&#xe601;</i>
                        </li>
                    </ul>

                    <div className="log">
                        <a href="javascript:;" className="btn-login">联系微信客服</a>
                    </div>
                </div>

                <div className="zzc">
                    <div className="ewm">
                        <i className="icons">&#xe611;</i>
                        <img src={e}/>
                    </div>
                </div>
            </>
        )
    }
}
export default ServerShome;