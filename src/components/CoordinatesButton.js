import React from 'react';
import ReactDOM from 'react-dom';


export default class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    let x = event.clientX;
    let y = event.clientY;

    return this.props.onReceiveCoordinates([x, y])
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}></button>
    );
  }

}
