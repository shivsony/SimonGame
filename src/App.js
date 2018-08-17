import React, { Component } from 'react';
import Header from './components/Header/Header';
import Circle from './components/Circle/Circle';
import img from './back.png';
import './App.css';
const style = {
    backgraoundImage: "url("+ {img} +")"
};
class App extends Component {
  render() {
      
    return (
      <div className="App">
        <Header/>
        <div style={style} className="wrapper">
            <Circle>
              <Circle/>
            </Circle>
        </div>
      </div>
    );
  }
}

export default App;
