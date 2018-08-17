import React from 'react';
import './Circle.css';
class Circle extends React.Component {
    render() {
        return(
            <div className="circle-wrapper">
                <div className="upper-circle">
                    <div className="box t-l"></div>
                    <div className="box t-r"></div>
                </div>
                {this.props.children}
                <div className="down-circle upper-circle">    
                    <div className="box b-l"></div>
                    <div className="box b-r"></div>
                </div>
            </div>
        )
    };
}

export default Circle