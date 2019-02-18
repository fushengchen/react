import React,{Component} from 'react';
import "./Rank.css";
import RankBanner from "../RankBanner/RankBanner";
import RankDetail from "../RankDetail/RankDetail";
import RankHear from "../RankHear/RankHear";

class Rank extends Component{
    render(){
        return(
            <div className="Rank">
                <RankHear/>
                <RankBanner/>
                <RankDetail/>
            </div>
        )
    }
}
export default Rank;