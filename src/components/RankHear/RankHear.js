import React,{Component} from 'react';
import './RankHear.css'

class RankHear extends Component{
    render(){
        return(
            <>
                <ul className="bang_tab">
                    <li className="active"><a href="javascript:;">日榜</a></li>
                    <li><a href="javascript:;">周榜</a></li>
                    <li><a href="javascript:;">月榜</a></li>
                </ul>
            </>
        )
    }
}
export default RankHear;