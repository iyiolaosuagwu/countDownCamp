import React, { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock';

class App extends Component {
  state = {
    deadline: 'December 25, 2018',
    newDeadline: ''
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
  
    return (
      <div className="App">

        <div className="countDown">Countdown to {this.state.deadline}</div>

        <Clock deadline={this.state.deadline}/>

        <div >
          <input 
            onChange={e => this.setState({newDeadline: e.target.value})}
            placeholder="new date" />
          <button onClick={() =>this.changeDeadline()}>submit</button>
        </div>
      </div>
    );
  }
}

export default App;



// Creator Iyiola Osuagwu