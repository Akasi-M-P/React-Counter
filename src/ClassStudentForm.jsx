import React, { Component } from "react";

class ClassStudentForm extends Component {
  state = {
    fullname: "",
    email: "",
    gen: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Fullname: ${this.state.fullname}, Email: ${this.state.email}, Gender: ${this.state.gen}`
    );
  };

  handleFullnameChange = (e) => {
    this.setState({ fullname: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleGenChange = (e) => {
    this.setState({ gen: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h1>Student Class Form</h1>
        <label className="form__label">
          Full Name:
          <input
            type="text"
            value={this.state.fullname}
            onChange={this.handleFullnameChange}
            className="form__input"
          />
        </label>
        <br />
        <label className="form__label">
          Email:
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="form__input"
          />
        </label>
        <br />
        <label className="form__label">
          Gen #:
          <input
            type="number"
            value={this.state.gen}
            onChange={this.handleGenChange}
            className="form__input"
          />
        </label>
        <br />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    );
  }
}

export default ClassStudentForm;
