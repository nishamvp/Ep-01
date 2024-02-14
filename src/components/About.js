import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        console.log('Parent constructor')
        super(props)
    }

    componentDidMount(){
        console.log('Parent did mount')
    }

  render() {
    console.log('Parent render')
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"first"} />
        <UserClass name={"second"} />
      </div>
    );
  }
}



export default About;
