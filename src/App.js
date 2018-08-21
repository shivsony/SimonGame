import React, { Component } from 'react';
import Header from './components/Header/Header';
import Circle from './components/Circle/Circle';
import InnerCircle from './components/InnerCircle/InnerCircle';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      switch: false,
      start: false,
      number: 0
    }
  this.handelClick = this.handelClick.bind(this);
  this.startGame = this.startGame.bind(this);
  }
  handelClick(event) {
    this.setState({
      id: 2
    });
    console.log(this.state.id)
  }
  startGame() {
      this.setState({
          start: true
      })
  }
  pattern() {
    setInterval( () => {
      var nu = Math.floor(Math.random()*4) + 1;
      this.setState({
        number: nu 
      })
      console.log(this.state.number)
    }, 1000  )
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="wrapper">
            <Circle number={this.state.number} start={this.state.start}>
              <InnerCircle startGame={this.startGame} switch={this.state.switch}/>
            </Circle>
        </div>
      </div>
    );
  }
}

export default App;
