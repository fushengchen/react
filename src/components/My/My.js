import React,{Component} from 'react';
import "./My.css";
import MyHear from "../MyHear/MyHear";
import MyList from "../MyList/MyList";

class My extends Component{


    state={
        list:[]
    };
    componentDidMount(){
        fetch(
            `/data/user.json`
        ).then(
            res=>res.json()
        ).then(
            data=>this.setState({list:data})
        )
    }

    render(){
        return(
            <>

                <MyHear list={this.state.list} />
                <MyList/>
            </>
        )
    }
}
export default My;