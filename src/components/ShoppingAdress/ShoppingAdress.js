import React,{Component} from 'react';
import "./ShoppingAdress.css";

class ShoppingAdress extends Component{
    render(){
        return(
            <>
                <div className="ShoppingAdress">
                    <div className="wrap">
                        <div className="fixed_top">
                            <div className="top-l"><a href="javascript:window.history.back()"><i
                                className="icons">&#xe600;</i></a></div>
                            <h1>收货地址</h1>
                            <div className="top-r"><a href="javascript:;" className="bjbtn">管理</a></div>
                        </div>

                        <div className="container">
                            <ul className="address_list">
                                <li className="active">
                                    <div className="dzcheck"><i className="icons unchecked">&#xe604;</i><i
                                        className="icons checked">&#xe653;</i></div>
                                    <h4><span>程雨华</span><span>1586264544</span></h4>
                                    <p>武汉市江夏区保利海上五月花17栋1702</p>
                                    <div className="delete"><i className="icons">&#xe62a;</i></div>
                                </li>
                                <li>
                                    <div className="dzcheck"><i className="icons unchecked">&#xe604;</i><i
                                        className="icons checked">&#xe653;</i></div>
                                    <h4><span>程雨华</span><span>1586264544</span></h4>
                                    <p>武汉市江夏区保利海上五月花17栋1702</p>
                                    <div className="delete"><i className="icons">&#xe62a;</i></div>
                                </li>
                                <li>
                                    <div className="dzcheck"><i className="icons unchecked">&#xe604;</i><i
                                        className="icons checked">&#xe653;</i></div>
                                    <h4><span>程雨华</span><span>1586264544</span></h4>
                                    <p>武汉市江夏区保利海上五月花17栋1702</p>
                                    <div className="delete"><i className="icons">&#xe62a;</i></div>
                                </li>
                                <li>
                                    <div className="dzcheck"><i className="icons unchecked">&#xe604;</i><i
                                        className="icons checked">&#xe653;</i></div>
                                    <h4><span>程雨华</span><span>1586264544</span></h4>
                                    <p>武汉市江夏区保利海上五月花17栋1702</p>
                                    <div className="delete"><i className="icons">&#xe62a;</i></div>
                                </li>
                                <li>
                                    <div className="dzcheck"><i className="icons unchecked">&#xe604;</i><i
                                        className="icons checked">&#xe653;</i></div>
                                    <h4><span>程雨华</span><span>1586264544</span></h4>
                                    <p>武汉市江夏区保利海上五月花17栋1702</p>
                                    <div className="delete"><i className="icons">&#xe62a;</i></div>
                                </li>
                            </ul>
                        </div>

                        <ul className="address_tab">
                            <li><a href="new_address.html">新建地址</a></li>
                            <li><a href="javascript:;">设为默认</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default ShoppingAdress;