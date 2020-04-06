import React, { Component } from 'react';
import './Buttons.css';

export default class Button extends Component {
  render() {
    return (
      <div className='button'>
        <button onClick={this.props.prev}> &lt; Previous </button>
        <button onClick={this.props.next}> Next &gt; </button>
      </div>
    );
  }
}

// let curElement = 0;

// function updateNumberList() {
//   this.state.user.getElementById("id").innerHTML = this.state.user[
//     curElement++
//   ];
//   if (curElement == this.state.user.length) curElement = 0;
// }

// console.log(curElement);
