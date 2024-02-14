import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+' child constructor')

    this.state ={
      login:null,
      bio:null
    }
  }

  async componentDidMount (){
    
    console.log(this.props.name+ 'componentDidMount')
    const data =await fetch("https://api.github.com/users/nishamvp")
    const json =await data.json()
    console.log(this.props.name+ 'fetchdata gets')
    
    this.setState(json)  
  }
  componentDidUpdate(prevProps, prevState) {
   if(this.state.login !== prevState.login){
    console.log( this.props.name+'componentDidUpdate');
   }
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log('clear timer')
  }
  

  render() {
    console.log(this.props.name+' child render')
    const { name } = this.props;
    const {login,bio} = this.state
    return (
      <div className="user-card">  
        <h1>{name} component</h1>
        <h1>{login} class Component</h1>
        <h2>{bio} class Component</h2>
      </div>
    );
  }
}

export default UserClass;
