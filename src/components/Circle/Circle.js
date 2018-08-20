import React from 'react';
import './Circle.css';
class Circle extends React.Component {
    cunstructor(props){
      this.super(props);
      this.state = {
        id: 1
      }
    this.handelClick = this.handelClick.bind(this);
    }
    handelClick(event) {
      this.setState({
        id: 2
      });
      console.log(this.state.id)
    }

    render() {
        return(
            <div className="circle-wrapper">
                <div className="upper-circle">
                    <div onClick={this.handelClick} className="box t-l blue"></div>
                    <div onClick={this.handelClick} className="box t-r red"></div>
                </div>
                {this.props.children}
                <div className="down-circle upper-circle">
                    <div onClick={this.handelClick} className="box b-l green"></div>
                    <div onClick={this.handelClick} className="box b-r yellow"></div>
                </div>
            </div>
        )
    };
}

export default Circle
