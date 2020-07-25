import React from 'react';
import ReactDOM from 'react-dom';

// const myfirstelement = <h1>Hello React app!</h1>

class AdditionCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: null,
      value1: null,
      value2: null};
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  add = () => {
    var sum2 = parseInt(this.state.value1) + parseInt(this.state.value2);
    this.setState({sum: sum2});
  }

  render() {
    return (
      <div>
        <h1>My Addition Calculator</h1>
        <input type="text" name="value1" onChange={this.myChangeHandler} /> + <input type="text" name="value2" onChange={this.myChangeHandler} /> = {this.state.sum}
        <br /><br /><button onClick={this.add}>Perform Addition</button>
      </div>
    );

  }
}

ReactDOM.render(<AdditionCalc />, document.getElementById('root'));
