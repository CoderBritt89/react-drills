import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
constructor(){
super()
this.state = {
  favoriteFood: ['Poke', 'Pizza', 'Burger', 'Quesadilla', 'Sushi', 'Ramen', 'Pho', 'Bahn Mi', 'Croissants', 'salmon', 'steak'],
  filterString: ''

}

}


handleChange(filter){
  this.setState({filterString: filter})

}

filterList(userInput){
 let foodList = this.state.favoriteFood;
 let filteredList = [];


 for(let i = 0; i<foodList.length; i++ )
 if(foodList[i].includes(userInput)){
   filteredList.push(foodList[i])
 }

}


render (){

  let list = this.state.favoriteFood.map((elem, index)=>{
    return <h2 key={index}>{elem}</h2>

  });

  return(

    <div>
      <input onChange={(e)=>this.filterList(e.target.value)} type="text" />
      <h2>{list}</h2>

    </div>
  )
}

}




export default App;
