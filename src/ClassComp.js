import { Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
    }

   render(){
    return(
        <div>
            <h2>ClassComponent</h2>
            <h4>Welcome to {this.props.title}</h4>
        </div>
    )
   }
}

export default ClassComp