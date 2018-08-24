import React from 'react';
import PropTypes from 'prop-types';
import './SimonOnOffButton.css';
const [ON, OFF] = ['ON', 'OFF'];
class SimonOnOffButton extends React.Component {
  deviceStatus() {
    return this.props.isDeviceOn ? ON : OFF;
  }
  render() {
    return(
      <div className="switch-button-container">
        <div className="switch-button-wrapper">
          <button onClick={this.props.onHitDeviceOnOff} className="action-button switch-button" />
        </div>
        <div className="switch-button-caption">{this.deviceStatus()}</div>
      </div>
    );
  }
}

SimonOnOffButton.preProps = {
  isDeviceOn: PropTypes.bool.isRequired,
  onHitDeviceOnOff: PropTypes.func.isRequired,
}

export default SimonOnOffButton
