import React,{Component} from 'react';
import './RankBanner.css';
import pic1 from '../../assets/img/pic1.png';

class RankBanner extends Component{
    render(){
        return(
            <>
                <ul className="top_bang">
                    <li>
                        <div className="img"><img src={pic1}/></div>
                        <h2>清风徐来</h2>
                        <p>已获胜<span>452</span>单</p>
                    </li>
                    <li>
                        <div className="img"><img src={pic1}/></div>
                        <h2>清风徐来</h2>
                        <p>已获胜<span>392</span>单</p>
                    </li>
                    <li>
                        <div className="img"><img src={pic1}/></div>
                        <h2>清风徐来</h2>
                        <p>已获胜<span>352</span>单</p>
                    </li>
                </ul>
            </>
        )
    }
}
export default RankBanner;