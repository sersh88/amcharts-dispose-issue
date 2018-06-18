import React, { Component } from 'react';
import Chart from './Chart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {show: true}
  }
  render() {
    const {show} = this.state;
    return (
      <div>
        <button id='hide' className='hide-btn' onClick={() => this.setState({show: !show})}>{show ? 'hide' : 'show'}</button>
        {show ? <Chart/> : ''}
      </div>
    );
  }
}

export default App;