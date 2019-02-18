import React from "react";
import {NavLink} from "react-router-dom";
import './Footer.css';

const Footer = (props)=>(
    <div className="footer">
        <ul>
            <li>
                <NavLink to={{pathname:'/home'}}  className="active">
                    <p><i className="icons">&#xe66b;</i></p>
                    <h4>首页</h4>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname:'/rank'}}>
                    <p><i className="icons">&#xe68f;</i></p>
                    <h4>排行</h4>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname:'/servershome'}}>
                    <p><i className="icons">&#xe608;</i></p>
                    <h4>客服</h4>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname:'/my'}}>
                    <p><i className="icons">&#xe607;</i></p>
                    <h4>我的</h4>
                </NavLink>
            </li>
        </ul>
    </div>
);
export default Footer;