import React, { useState } from "react";

const Form = () => {
  const [fieldError, setFieldsError] = useState("All fields are mandatory");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [numError, setNumError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [greet, setGreet] = useState("");
  const userNameRef = useRef(""); // Add this

  function handleSubmit(evt) {
    evt.preventDefault();
    setGreet(`Hello ${userNameRef.current}`); // Use ref
  }

  function verifyName(evt) {
    const name = evt.target.value;
    if (!/^[a-zA-Z]+$/.test(name)) {
      setNameError("Name is not alphanumeric");
      setFieldsError("");
    } else {
      setNameError("");
      setFieldsError("");
    }
  }

  function verifyEmail(evt) {
    const email = evt.target.value;
    if (!email.includes("@")) {
      setEmailError("email must contain @");
      return;
    }
    setEmailError("");
    userNameRef.current = email.split("@")[0].toUpperCase(); // Use ref
  }

  function verifyGender(evt) {
    const gender = evt.target.value;
    if (gender == "notSelected")
      setGenderError("Please identify as male, female or others");
    else setGenderError("");
  }

  function verifyNumber(evt) {
    const num = evt.target.value;
    if (!/^[0-9]+$/.test(num))
      setNumError("Phone Number must contain only numbers");
    else setNumError("");
  }

  function verifyPassword(evt) {
    const pwd = evt.target.value;
    if (!(pwd.length >= 6))
      setPwdError("Password must contain atleast 6 letters");
    else setPwdError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{greet}</h2>
      {/*prettier-ignore */}
      <fieldset>
        <legend>User Form</legend>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" data-testid="name" onBlur={verifyName}/>
        <span>{nameError}</span>
        <label htmlFor="email">Email</label>
        <input type="text" data-testid="email" id="email" onBlur={verifyEmail}/>
        <span>{emailError}</span>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" defaultValue="notSelected" data-testid="gender" onBlur={verifyGender}>
          <option value="notSelected">Select any one</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span>{genderError}</span>
        <label htmlFor="phone">Phone</label>
        <input type="text" data-testid="phoneNumber" required onBlur={verifyNumber}/>
        <span>{numError}</span>
        <label htmlFor="password">Password</label>
        <input type="password" data-testid="password" id="password" onBlur={verifyPassword}/>
        <span>{pwdError}</span>
        <button data-testid="submit" type="submit">Submit</button>
        <span>{fieldError}</span>
      </fieldset>
    </form>
  );
};

export default Form;
