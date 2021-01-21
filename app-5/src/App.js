import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'; //this is importing the child component

class App extends Component {

  render (){
    return (
      <div className="App">
      <Image url={"https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x375.jpg"}/> 
      </div>
    );
  }  
}

 

export default App;
