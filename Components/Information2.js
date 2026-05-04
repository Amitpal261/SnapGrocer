import { Component } from "react";

class Information2 extends Component {
    constructor(props) {
        super(props);

    }
     componentDidMount() {
    console.log(" 2st parent Mounted");
  }
    render(){
        return(
            <>
            <h1>WELCOME TO INFO PAGE</h1>
            <h1>NAME : {this.props.name}</h1>
            </>
        )
    }
}

export default Information2;