import React from 'react';
import './WinningMessage.css';
class WinningMessage extends React.Component {
    render(){
        if(!this.props.hasUserWon){
            return null;
        }
        return(
            <div className="winning-message">
                <p>Congratulations You have WON The Game!</p>
            </div>
        );
    }
}

export default WinningMessage
