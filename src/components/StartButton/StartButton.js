import React from 'react';
import PropTypes from 'prop-types';
import './StartButton.css';
class StartButton extends React.Component {
  render() {
    return(
      <div className="start-button-container">
        <div className="start-button-wrapper">
          <button onClick={this.props.onClickStartButton} className="action-button start-button" />
        </div>
        <div className="start-button-caption">start</div>
      </div>
    );
  }
}

StartButton.propTypes = {
  onClickStartButton: PropTypes.func.isRequired
};

export default StartButton
