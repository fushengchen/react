import React,{Component} from 'react';
import {Link} from "react-router-dom";
import pic1 from '../../assets/img/pic1.png';
import pic2 from '../../assets/img/pic2.png';
import pic3 from '../../assets/img/pic3.png';
import pic4 from '../../assets/img/pic4.png';
import './HomeDetail.css';

import {connect} from 'react-redux'
import * as types from "../../store/types";
import asyncList from "../../store/actions/anynList";

class HomeDetail extends Component{
    constructor(props){
        super();
        props.get();
    }
    render(){
        let {list,dataname} = this.props;
        return(
            <>
                <div className="ztmc">
                    <h2><i className="icons">&#xe628;</i>虚拟商品</h2>
                    <ul className="ztmc_list">
                            {
                                list.map(item=>(
                                    <li key={item.productId}>
                                        <Link to={item.detailUrl}>
                                            <div className="img"><img src={item.smallImage}/></div>
                                        </Link>
                                        <div className="prolist_info">
                                            <h4>{item.productName}</h4>
                                            <p className="grey">原价:￥<span>{item.marketPrice}</span></p>
                                            <p className="red">抢购价:￥<span>{item.vipshopPrice}</span></p>
                                            <div className="add">
                                                <a href="javacsript:;">立即抢购</a>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                    </ul>
                </div>



                <div className="ztmc">
                    <h2><i className="icons">&#xe628;</i>实物商品</h2>
                    <ul className="ztmc_list">
                        <li>
                            <a href="javacsript:;">
                                <div className="img"><img src={pic1}/></div>
                            </a>
                            <div className="prolist_info">
                                <h4>小米笔记本MIX8核i72G独显</h4>
                                <p className="grey">原价:￥<span>18.00</span></p>
                                <p className="red">抢购价:￥<span>15.00</span></p>
                                <div className="add"><a href="javacsript:;">立即抢购</a></div>
                            </div>
                        </li>
                        <li>
                            <a href="javacsript:;">
                                <div className="img"><img src={pic2}/></div>
                            </a>
                            <div className="prolist_info">
                                <h4>小米笔记本MIX8核i72G独显</h4>
                                <p className="grey">原价:￥<span>18.00</span></p>
                                <p className="red">抢购价:￥<span>15.00</span></p>
                                <div className="add"><a href="javacsript:;">立即抢购</a></div>
                            </div>
                        </li>
                        <li>
                            <a href="javacsript:;">
                                <div className="img"><img src={pic3}/></div>
                            </a>
                            <div className="prolist_info">
                                <h4>小米笔记本MIX8核i72G独显</h4>
                                <p className="grey">原价:￥<span>18.00</span></p>
                                <p className="red">抢购价:￥<span>15.00</span></p>
                                <div className="add"><a href="javacsript:;">立即抢购</a></div>
                            </div>
                        </li>
                        <li>
                            <a href="javacsript:;">
                                <div className="img"><img src={pic4}/></div>
                            </a>
                            <div className="prolist_info">
                                <h4>小米笔记本MIX8核i72G独显</h4>
                                <p className="grey">原价:￥<span>18.00</span></p>
                                <p className="red">抢购价:￥<span>15.00</span></p>
                                <div className="add"><a href="javacsript:;">立即抢购</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
const initMapStateToProps=state=>({
    home:state.home
});
const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
        url:'/data/home.data',
        type:types.VIEW_HOMEDETAIL
    }))
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(HomeDetail);

// export default HomeDetail;