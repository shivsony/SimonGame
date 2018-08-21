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
  this.power = this.power.bind(this);
  }
  pattern() {
    var rand = setInterval( () => {
      var nu = Math.floor(Math.random()*4) + 1;
      this.setState({
        number: nu 
      })
      console.log(this.state.number)
    }, 1000  )
    if(this.state.switch){
      clearInterval(rand);
    }
  }
  power() {
    this.setState({
      switch: !this.state.switch
    })
    console.log(this.state.switch)
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
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="wrapper">
            <Circle number={this.state.number} start={this.state.start} switch={this.state.switch}>
              <InnerCircle startGame={this.startGame} switch={this.state.switch} power={this.power} />
            </Circle>
        </div>
      </div>
    );
  }
}

export default App;
