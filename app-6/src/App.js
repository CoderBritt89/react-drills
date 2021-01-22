import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component{
constructor(){
super()
this.state = {
  taskStorage: [],
  inputTask: ''
}
this.handleAddTask = this.handleAddTask.bind(this);
}

handleInputChange(value){
this.setState({inputTask: value})
}

handleAddTask(){ //this sets state for when a task is entered in the input field
this.setState({
  taskStorage: [...this.state.taskStorage, this.state.inputTask],
  inputTask: ''

})

}
  render(){
    let list = this.state.taskStorage.map((elem, index)=>{
      return <Todo key={index} task={elem}/>

    })

    return (
      <div className="App">
        <div>
        <h1>My to-do list:</h1>
        <input value={this.state.input} 
        placeholder="Enter new task" 
        onChange={(e)=>this.handleInputChange(e.target.value)} Add/>
          <button onClick={this.handleAddTask}>Add</button>
          </div>
          <br></br>
          {list}
      </div>
    );

  }
 
}

export default App;
