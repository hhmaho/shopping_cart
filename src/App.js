import React, { Component } from 'react';
//31 mag wegimport logo from './logo.svg';
//31 import './App.css';

class App extends Component {
  render() {
    //33
    console.log(this.props)
    return (
      //32 hieronder eerst weg dan 2*p
      <div className="App">
       <p>
         test data:
         {}
       </p>

       <p>

         <button onClick={() => console.log("ok")}>
         dispatch
         </button>
         
       </p>

      </div>
    );
  }
}

export default App;