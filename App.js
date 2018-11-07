import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Helloworld from './HelloWorld' ;
const pacticleOpt = {
  particles:{
  number:{
  value:200,
  density:{
  enabl:true, value_area:800
  }
  }
  }
  }
class App extends Component {
  render() {
    return (
      <div className="App">
       <Helloworld />
       <button>Login</button>
      <Particles
       params={pacticleOpt}
/>




           </div>
    );
  }
}

export default App;
