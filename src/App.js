import React from 'react';
import './App.css';

  class App extends React.Component {
  state = {
    count: 0,
    fname: '',
    lname: '',
    error: ''
  }

  constructor(props){
    super(props);
    this.updateFName = this.updateFName.bind(this);
    this.updateLName = this.updateLName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFName(event){
    this.setState({fname : event.target.value})
  }

  updateLName(event){
    this.setState({lname : event.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({error: ''})
    let newNum = Math.floor(Math.random() * 99999999)
    let len = newNum.length
    let fInt = newNum.toString().substr(0,1)
    let lInt = newNum.toString().substr(7,8)
    this.setState({number : newNum})
    this.setState({fInt : fInt})
    this.setState({lInt : lInt})
    this.setState({len : len})
    if (newNum.length === 7) {
      this.setState({error: 'Invalid number!'})
    }
  } 

  handleClear(){
  } 

  render() {
    return (
      <div className="App">
          <header className="App-header">
          <form>
            <input type="text" placeholder="First Name" onChange={this.updateFName}></input><br />
            <input type="text" placeholder="Last Name" onChange={this.updateLName}></input><br />
            <input type="submit" onClick={this.handleSubmit} ></input>
            <input value="Clear" type="submit" onClick={this.handleClear} ></input>
          </form>
          <h2>{this.state.name}</h2>
          <h2>{this.state.number}</h2>
          <h2>{this.state.fInt}</h2>
          <h2>{this.state.lInt}</h2>
          <h2>{this.state.len}</h2>
        </header>
      </div>
    )
  };
}

export default App;