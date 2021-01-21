import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
constructor(){
  super()
  this.state = {
    message: ''


  }
}


displayMessage(str){
  this.setState({message: str})

}


render(){
  return (
    <div className="App">
      <input placeholder="type" onChange={(e)=>this.displayMessage(e.target.value)}/>
      <p>{this.state.message}</p>
    </div>
  )



}
 
}

export default App;
