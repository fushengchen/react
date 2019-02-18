import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "./MyList.css"

class MyList extends Component{
    render(){
        return(
            <>
                <ul className="mycenter_list">
                    <li>
                        <Link to="/shoppingadress">
                            <div><i className="icons ititle">&#xe6cd;</i></div>
                            <p>收货地址</p><i className="icons tomore">&#xe601;</i>
                        </Link>
                    </li>
                    <li><a href="javaScript;">
                        <div><i className="icons ititle">&#xe605;</i></div>
                        <p>代理</p><i className="icons tomore">&#xe601;</i></a>
                    </li>
                    <li><a href="javaScript;">
                        <div><i className="icons ititle">&#xe681;</i></div>
                        <p>代理详情</p><i className="icons tomore">&#xe601;</i></a>
                    </li>
                    <li><a href="javaScript;">
                        <div><i className="icons ititle">&#xe60c;</i></div>
                        <p>绑定手机</p><i className="icons tomore">&#xe601;</i></a>
                    </li>
                </ul>

                <ul className="mycenter_list">
                    <li><a href="javaScript;">
                        <div><i className="icons ititle">&#xe60d;</i></div>
                        <p>兑换记录</p><i className="icons tomore">&#xe601;</i></a></li>
                    <li><a href="javaScript;">
                        <div><i className="icons ititle">&#xe6b9;</i></div>
                        <p>充值记录</p><i className="icons tomore">&#xe601;</i></a></li>
                    <li><a href="javaScript;">
                        <div><i className="icons ititle">&#xe66d;</i></div>
                        <p>提现记录</p><i className="icons tomore">&#xe601;</i></a>
                    </li>
                    <li><Link to='/login'>
                        <div><i className="icons ititle">&#xe66d;</i></div>
                        <p>login</p><i className="icons tomore">&#xe601;</i></Link>
                    </li>
                    <li><Link to='/reg'>
                        <div><i className="icons ititle">&#xe66d;</i></div>
                        <p>Reg</p><i className="icons tomore">&#xe601;</i></Link>
                    </li>
                </ul>
            </>
        )
    }
}
export default MyList;