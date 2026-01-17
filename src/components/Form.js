import React, { useState } from "react";

const emptyValues = { name: "", email: "", gender: "", phone: "", password: "" };

const Form = () => {
  const [values, setValues] = useState(emptyValues);
  const [formStatus, setFormStatus] = useState("");
  const [greet, setGreet] = useState("");
  const { name, email, gender, phone, password } = values;

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name && !email && !gender && !phone && !password) return setFormStatus("All fields are mandatory");
    if (validateName(name)) return setFormStatus(validateName(name));
    if (validateEmail(email)) return setFormStatus(validateEmail(email));
    if (validateGender(gender)) return setFormStatus(validateGender(gender));
    if (validatePhone(phone)) return setFormStatus(validatePhone(phone));
    if (validatePassword(password)) return setFormStatus(validatePassword(password));
    setGreet(`Hello ${email.split("@")[0].toUpperCase()}`);
    setFormStatus("Please identify as male, female or others");
  }

  function validateName(name) {
    const trimmed = name.trim();
    if (/^[a-zA-Z\s]+$/.test(trimmed)) return "";
    return "Name is not alphanumeric";
  }

  function validateEmail(email) {
    const trimmed = email.trim();
    if (/[@]/.test(trimmed)) return "";
    return "email must contain @";
  }

  function validateGender(gender) {
    if (["male", "female", "other"].includes(gender)) return "";
    return "Please identify as male, female or others";
  }

  function validatePhone(phone) {
    const trimmed = phone.trim();
    if (/^[0-9]+$/.test(trimmed)) return "";
    return "Phone Number must contain only numbers";
  }

  function validatePassword(password) {
    const trimmed = password.trim();
    if (trimmed.length >= 6) return "";
    return "Password must contain atleast 6 letters";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name *</label>
        <input type="text" data-testid="name" name="name" onChange={handleChange} value={name}/>
        <label>Email *</label>
        <input type="text" data-testid="email" name="email" onChange={handleChange} value={email}/>
        <label>Gender *</label>
        <select data-testid="gender" name="gender" value={gender} onChange={handleChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label>Phone Number *</label>
        <input type="text" data-testid="phoneNumber" name="phone" onChange={handleChange} value={phone}/>
        <label>Password *</label>
        <input type="password" data-testid="password" name="password" onChange={handleChange} value={password}/>
        <button data-testid="submit">Submit</button>
        <span>{formStatus}</span>
        <h2>{greet}</h2>
      </form>
    </div>
  );
};

export default Form;
