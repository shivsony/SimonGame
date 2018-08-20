import React from 'react';
import './InnerCircle.css';
class InnerCircle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            switch: false
        }
        this.handelClick = this.handelClick.bind(this);
    }
    handelClick() {
        this.setState({
            switch: !this.state.switch
        })
    }
    render() {
        return(
            <div className="inner-circle">
                <h1>Simons</h1>
                <div className="display-buttons">
                    <div className="display">
                    </div>
                    <div className="start btn yellow clicable">
                    </div>
                    <div className="stickt btn red clicable">
                    </div>
                </div>
                <div className="lebels">
                  <div className="inline lebel cnt">count</div>
                  <div className="inline lebel st" >start</div>
                  <div className="inline lebel stct" >strict</div>
                </div>
                <div >
                    <span className="inline">off</span>
                    <div onClick={this.handelClick} className="switch inline">
                        {this.state.switch===false ? <div className="slider__off"></div>:<div className="slider__on"></div>}
                    </div>
                    <span className="inline">on</span>
                </div>
            </div>
        )
    };
}

export default InnerCircle
