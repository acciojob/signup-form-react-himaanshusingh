import React from "react";

const Form = () => {
  let name = "";
  function handleSubmit(evt) {
    evt.preventDefault();
    alert(`Hello ${evt.name}`);
  }

  function verifyName(evt) {
    const name = evt.target.value;
    if (!/^[a-zA-Z0-9 ]+$/.test(name)) alert("Name is not alphanumeric.");
  }

  function verifyEmail(evt) {
    const email = evt.target.value;
    if (!email.includes("@")) {
      alert("Email must contain @");
      return;
    }
    name = email;
  }

  function verifyGender(evt) {
    const gender = evt.target.value;
    if (!gender) alert("Please identify as male, female or others");
  }

  function verifyNumber(evt) {
    const num = evt.target.value;
    if (!/^[0-9]+$/.test(num)) alert("Phone Number must contain only numbers");
  }

  function verifyPassword(evt) {
    const pwd = evt.target.value;
    if (!(pwd.length >= 6)) alert("Password must contain atleast 6 letters");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/*prettier-ignore */}
      <fieldset>
        <legend>Bank Form</legend>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" data-testid="name" onBlur={verifyName}/>
        <label htmlFor="email">Email</label>
        <input type="email" data-testid="email" id="email" onBlur={verifyEmail}/>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" defaultValue="male" data-testid="gender" onBlur={verifyGender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="phone">Phone</label>
        <input type="number" data-testid="phoneNumber" required onBlur={verifyNumber}/>
        <label htmlFor="password">Password</label>
        <input type="password" data-testid="password" id="password" onBlur={verifyPassword}/>
        <button data-testid="submit" type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Form;
