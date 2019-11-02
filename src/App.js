import React from 'react';
import './App.css';

  class App extends React.Component {
  state = {
    count: 0,
    newNumber: '',
    fname: '',
    lname: '',
    email: '',
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
    let email = this.state.fname.toLowerCase() + '.' + this.state.lname.toLowerCase() + '@domain.com'
    let newNum = Math.floor(Math.random() * 99999999)
    let fInt = newNum.toString().substr(0,1)
    let lInt = newNum.toString().substr(7,8)
    this.setState({newNumber : newNum, email : email, name :  this.state.fname + ' ' + this.state.lname})
    if (newNum.toString().length !== 8 || fInt === '0' || lInt === '0') {
      this.handleSubmit(e)
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
          <p>
            Technician Name: {this.state.name}<br/>
            Technician Email: {this.state.email}<br/>
            Technician ID Number: {this.state.newNumber}
          </p>
        </header>
      </div>
    )
  };
}

export default App;