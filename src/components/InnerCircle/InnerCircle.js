import React from 'react';
import './InnerCircle.css';
class InnerCircle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
    }
    render() {
        return(
            <div className="inner-circle">
                <h1>Simon</h1>
                <div className="display-buttons">
                    <div className="display">
                        {
                            this.props.switch===true ? 
                            this.state.count === 0 ? '--' :
                            <span>{this.state.count}</span> : ''
                        }
                    </div>
                    <div onClick={this.props.startGame} className="start btn red clicable">
                    </div>
                    <div className="stickt btn yellow clicable">
                    </div>
                </div>
                <div className="lebels">
                  <div className="inline lebel cnt">count</div>
                  <div className="inline lebel st" >start</div>
                  <div className="inline lebel stct" >strict</div>
                </div>
                <div >
                    <span className="inline lebel">off</span>
                    <div onClick={this.props.power} className="switch inline">
                        {this.props.switch===false ? <div className="slider__off"></div>:<div className="slider__on"></div>}
                    </div>
                    <span className="inline lebel">on</span>
                </div>
            </div>
        )
    };
}

export default InnerCircle
