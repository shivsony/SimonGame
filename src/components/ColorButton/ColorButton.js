import React from 'react';
import './ColorButton.css';

class ColorButton extends React.Component {
  render() {
    return(
      <div>
        <div className="simon-sound-button">
          <button className="simon-button first"/>
        </div>
        <div className="simon-sound-button">
          <button className="simon-button second"/>
        </div>
        <div className="simon-sound-button">
          <button className="simon-button third"/>
        </div>
        <div className="simon-sound-button">
          <button className="simon-button forth"/>
        </div>
    </div>
  );
  }
}

export default ColorButton
