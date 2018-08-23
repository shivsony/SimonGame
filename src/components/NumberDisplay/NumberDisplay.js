import React from 'react';
import './NumberDisplay.css';
const lpad = str => (`0${str}`).substring(str.length);
class NumberDisplay extends React.Component {
  render() {
    return(
      <div className="display-container">
        <div className="display-number">{lpad(2)}</div>
        <div className="display-number-caption">count</div>
      </div>
    );
  }
}

export default NumberDisplay
