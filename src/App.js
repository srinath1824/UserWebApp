import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username:"",
      password: ""
    }
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit() {
    if(this.state.username == "" || this.state.password == "") {
      this.setState({error: "Please enter username or password"})
    } else {
    const result = await axios.post('http://localhost:5000/login', {username: this.state.username, password: this.state.password});
    console.log(result);
    }
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}><br/>
        <p style={{color: 'red'}}>{this.state.error}</p>
        <input type="text" placeholder="Enter username" name="username" onChange={(e) => this.handleChange(e)}/><br/><br/>
        <input type="password" placeholder="Enter password" name="password" onChange={(e) => this.handleChange(e)}/><br/><br/>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    )
  }
}

export default App;
