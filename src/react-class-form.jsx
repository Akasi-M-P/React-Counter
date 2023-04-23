import React, { Component } from "react";

class ReactClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //post to server or do something
    console.log(this.state.name, this.state.email, this.state.password);
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h4>Controlled Forms</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default ReactClassForm;
