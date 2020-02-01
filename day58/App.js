import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import post from './components/post'


class App extends Component {
  render(){
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
      {/*react automatically adds props to these route components* and not the navbar unless usinga a higher order componenent*/}
       <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/:post_id" component={post} /> {/*we define a route parameter using /: followed by a name of our choice, which is the value that will change to identify the posts*/}
        </Switch>
      </div>

    </BrowserRouter>
  );
}
}

export default App;
