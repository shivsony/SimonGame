import React from 'react';
import './StrictButton.css';
class StrictButton extends React.Component {
  render() {
    return(
      <div className="strict-button-container">
        <div className={`strict-mode-indicator`}  />
        <div className="strict-button-wrapper">
          <button className="action-button strict-button" />
        </div>
        <div className="strict-button-caption">strict</div>
      </div>
    );
  }
}

export default StrictButton
