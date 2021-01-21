import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
super()
this.state = {
sentence: ['I', 'love', 'to', 'code', 'it', 'is', 'challenging', 'and', 'fun']
}


}


render (){
  let sentenceToDisplay = this.state.sentence.map((elem, index)=>{
return <h2 key={index}>{elem}</h2>


  })


  return (
    <div className="App">
      <h2>{sentenceToDisplay}</h2>
      
    </div>
    
  );



}
  
}

export default App;
