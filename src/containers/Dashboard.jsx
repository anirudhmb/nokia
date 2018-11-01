import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import {Redirect} from 'react-router-dom';
import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<label>Street Location:<br/></label>
        <label>
          Address 1 : 
          <input type="text" name = "street" value={this.state.value} onChange={this.handleChange} />
        </label><br/>
        
			<label>
          City : 
          <input type="text" name = "city" value={this.state.value} onChange={this.handleChange} />
        </label><br/>

			<label>
          State : 
          <input type="text" name = "state" value={this.state.value} onChange={this.handleChange} />
        </label><br/><br/>

         <label>
          Type of emergency
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="fire">Fire</option>
            <option value="flood">Flood</option>
          </select>
        </label><br/><br/>
        
        <label>
          Type of environment
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="indoor">Indoor</option>
            <option value="outdoors">Outdoor</option>
          </select>
        </label><br/><br/>
        
        <label>
          Intensity of emergency
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="major">Major</option>
            <option value="minor">Minor</option>
          </select>
        </label><br/><br/>
        <input type="submit" value="Create Mission" />
      </form>
    );
  }
}

export default Dashboard;