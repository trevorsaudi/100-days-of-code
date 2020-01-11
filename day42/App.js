import React, {Component} from 'react';
import Persons from './Persons';
import AddPerson from './AddPerson';

class App extends Component{

  state = {
      persons :[
          
          {name: 'Trevor', age:20, university:"Strathmore",id:1},
          {name: 'Janice', age:20, university:"Strathmore",id:2},
          {name: 'Tinashe', age:21, university:"Strathmore",id:3}


      ]

  }


  render(){

  return (
    <div className="App">
  
      <h1>My first React app!</h1>
        <p>Welcome :)</p>    
        <Persons persons = {this.state.persons}/> 
        <AddPerson />
    </div>
  );
}
}


export default App;
