import React from 'react';
import './StartButton.css';
class StartButton extends React.Component {
  render() {
    return(
      <div className="start-button-container">
        <div className="start-button-wrapper">
          <button className="action-button start-button" />
        </div>
        <div className="start-button-caption">start</div>
      </div>
    );
  }
}

export default StartButton
