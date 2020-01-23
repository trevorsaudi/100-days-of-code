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

  addPerson = (person) =>{

     person.id = Math.random();
     let persons  = [...this.state.persons, person];

     this.setState({


      persons : persons



     })



  } 

deletePerson = (id) =>{
let persons = this.state.persons.filter(person => {
  return person.id != id
});
    this.setState({
      persons : persons
     })
  }

componentDidMount(){
  console.log("component mounted");
}
componentDidUpdate(prevProps, prevState){
  console.log('component updated');
  console.log(prevProps, prevState);
}

  render(){

  return (
    <div className="App">
  
      <h1>My first React app!</h1>
        <p>Welcome :)</p>    
        <Persons deletePerson ={this.deletePerson} persons = {this.state.persons}/> 
        <AddPerson addPerson ={this.addPerson} />
    </div>
  );
}
}


export default App;
