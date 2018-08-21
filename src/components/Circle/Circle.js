import React from 'react';
import './Circle.css';
class Circle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color1: '',
            color2: '',
            color3: '',
            color4: '',
            arr: [],
            temp: true
        }
        this.random = this.random.bind(this);
    }
    random() {
        setInterval( ()=>{
            var nu = Math.floor(Math.random()*4) + 1;
            var newArr = this.state.arr;
            newArr.push(nu);
            this.setState({
                arr: newArr
            })
            console.log(this.state.arr)
            if(nu===1){
                this.setState({
                    color1: 'blue',
                    color2: '',
                    color3: '',
                    color4: '',
                });
            } else if(nu===2){
                this.setState({
                    color1: '',
                    color2: 'red',
                    color3: '',
                    color4: '',
                });
            } else if(nu===3){
                this.setState({
                    color1: '',
                    color2: '',
                    color3: 'green',
                    color4: '',
                });
            } else {
                this.setState({
                    color1: '',
                    color2: '',
                    color3: '',
                    color4: 'yellow',
                });
            }
        },1000);
    }
    render() {
        const {number,start} = this.props
        if(start && this.state.temp && this.props.switch){
            this.setState({
                temp: false
            })
            this.random();
        }
        return(
            <div className="circle-wrapper">
                <div className="upper-circle">
                    <div id="1" style={{background: this.state.color1}} onClick={this.handelClick} className="box t-l blue"></div>
                    <div id="2" style={{background: this.state.color2}} onClick={this.handelClick} className="box t-r red"></div>
                </div>
                {this.props.children}
                <div className="down-circle upper-circle">
                    <div id="3" style={{background: this.state.color3}} onClick={this.handelClick} className="box b-l green"></div>
                    <div id="4" style={{background: this.state.color4}} onClick={this.handelClick} className="box b-r yellow"></div>
                </div>
            </div>
        )
    };
}

export default Circle
