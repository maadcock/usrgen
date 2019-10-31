import React from 'react';
import './App.css';

  class App extends React.Component {
  state = {
    count: 0,
    fname: '',
    lname: ''
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

  handleSubmit(){
    this.setState({name : this.state.fname + " " + this.state.lname})
  } 

  render() {
    return (
      <div className="App">
          <header className="App-header">
          <form>
            <input type="text" onChange={this.updateFName}></input><br />
            <input type="text" onChange={this.updateLName}></input><br />
            <input type="submit" onClick={this.handleSubmit} ></input>
          </form>
          <h1>
            {this.state.name}
          </h1>
        </header>
      </div>
    )
  };
}

export default App;