import React,{Component} from 'react';
import "./HomeHear.css";
import {connect} from "../../guard/Auth";


class HomeHear extends Component{
    render(){
        return(
            <>
                <div className="fixed_topw">
                    <div className="self_info">
                        <img src="../assets/img/pic1.png"/>
                        <h4>ID:<span>54545</span></h4>
                        <p>当前金币<span className="red">452</span></p>
                    </div>
                    <ul>
                        <li><a href="javacsript:;"><p><i className="icons">&#xe602;</i></p><h4>消息</h4></a></li>
                        <li><a href="javacsript:;"><p><i className="icons">&#xe60d;</i></p><h4>兑换</h4></a></li>
                        <li><a href="javacsript:;"><p><i className="icons">&#xe6b9;</i></p><h4>提现</h4></a></li>
                        <li><a href="javacsript:;"><p><i className="icons">&#xe60a;</i></p><h4>充值</h4></a></li>
                    </ul>
                </div>

                <div className="container" style={{padding:'60px 0'}}>

                    <div className="tzxx">
                        <i className="icons">&#xea61;</i>
                        <p><marquee>通知公告信息通知公告信息通知公告信息通知公告信息</marquee></p>
                    </div>

                    <div className="banner">
                        <div className="banner_top">
                            <h2>第20181521期</h2>
                            <a href="javacsript:;">往期数据</a>
                        </div>
                        <div className="main_data">
                            <ul id="datas">
                                <li>5</li>
                                <li>6</li>
                                <li>3</li>
                                <li>4</li>
                                <li>2</li>
                            </ul>
                        </div>
                    </div>

                    <div className="kjtimes">
                        <i className="icons">&#xe60f;</i>
                        <p>距离下期结束</p>
                        <div className="djs_timed">
                            <span>05</span>分<span>05</span>秒<span>05</span>
                        </div>
                    </div>

                    <div className="gz">
                        <span className="red">抢购规则:</span>根据当期"揭晓号码"的最后一位数字，为单数则为"买单"抢购成功，反之"买双"抢购成功。<a href="javacsript:;">详细说明>>></a>
                    </div>

                </div>
            </>
        )
    }
}

export default HomeHear;