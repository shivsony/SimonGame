import React from 'react';
import './InnerCircle.css';
class InnerCircle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            switch: false,
            start: false,
            count: 0
        }
        this.switch = this.switch.bind(this);
        this.start = this.start.bind(this);
    }
    switch() {
        this.setState({
            switch: !this.state.switch,
        })
        this.state.switch===false ? this.setState({
            start:false,
            count: 0
        }) : ''
    }
    start() {
        this.setState({
            start: true,
            count: 0
        })
        this.state.start===true ? this.gameOn() :''
    }
    gameOn() {
        setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        },500)
    }
    render() {
        return(
            <div className="inner-circle">
                <h1>Simons</h1>
                <div className="display-buttons">
                    <div className="display">
                        {
                            this.state.switch===true ? 
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
                    <div onClick={this.switch} className="switch inline">
                        {this.state.switch===false ? <div className="slider__off"></div>:<div className="slider__on"></div>}
                    </div>
                    <span className="inline lebel">on</span>
                </div>
            </div>
        )
    };
}

export default InnerCircle
