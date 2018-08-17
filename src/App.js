import React, { Component } from 'react';
import Header from './components/Header/Header';
import Circle from './components/Circle/Circle';
import InnerCircle from './components/InnerCircle/InnerCircle';
import img from './back.png';
import './App.css';
class App extends Component {
  render() {   
    return (
      <div className="App">
        <Header/>
        <div className="wrapper">
            <Circle>
              <InnerCircle/>
            </Circle>
        </div>
      </div>
    );
  }
}

export default App;
