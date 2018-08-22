import React from 'react';
import Header from '../Header/Header';
import './SimonDevice.css';
class SimonDevice extends React.Component {
    render(){
        return(
            <div className="App">
                <Header/>
                <div className="simon-device-wraper">
                </div>
            </div>
        );
    }
}

export default SimonDevice
