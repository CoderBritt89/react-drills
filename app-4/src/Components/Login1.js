import React, {Component} from 'react';

class Login1 extends Component{
constructor(){
    super()
    this.state = {                  //initializing state.
        username: '',
        password: ''

    }
this.handleLogin = this.handleLogin.bind(this); // this is establishing context for the child component. Have to bind this because the button onclick function isn't using an arrow function
    
}

handleUsernameChange(name){
    this.setState({username: name}) //this is setting the state for the username that is passed in from the user.
}

handlePasswordChange(pass){
    this.setState({password: pass}) // this is setting state for the password that is passed in from the user.
}

handleLogin(){
    alert(`Username: ${this.state.username} Password ${this.state.password}`)
}

render(){

    return(
    <div>
        <input onChange={(e)=>this.handleUsernameChange(e.target.value)} type="text" />
        <input onChange={(e)=>this.handlePasswordChange(e.target.value)} type="text"/>
        <button onClick={this.handleLogin}>Login</button>

    </div>

  
    
    )
}



}


export default Login1;