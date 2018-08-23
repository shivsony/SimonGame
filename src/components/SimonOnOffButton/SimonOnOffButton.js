import React from 'react';
import './SimonOnOffButton.css';
class SimonOnOffButton extends React.Component {
  render() {
    return(
      <div className="switch-button-container">
        <div className="switch-button-wrapper">
          <button className="action-button switch-button" />
        </div>
        <div className="switch-button-caption">{"OFF"}</div>
      </div>
    );
  }
}

export default SimonOnOffButton
