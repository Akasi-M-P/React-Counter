import React, { useState } from "react";

function FunctionStudentForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Fullname: ${fullname}, Email: ${email}, Gender: ${gen}`);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenChange = (e) => {
    setGen(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Student Function Form</h1>
      <label className="form__label">
        Full Name:
        <input
          type="text"
          value={fullname}
          onChange={handleFullnameChange}
          className="form__input"
        />
      </label>
      <br />
      <label className="form__label">
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="form__input"
        />
      </label>
      <br />
      <label className="form__label">
        Gen #:
        <input
          type="number"
          value={gen}
          onChange={handleGenChange}
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

export default FunctionStudentForm;
