import React, { useState } from "react";

const emptyValues = { name: "", email: "", gender: "", phone: "", password: "" }; // prettier-ignore

const Form = () => {
  const [values, setValues] = useState(emptyValues);
  const { name, email, gender, phone, password } = values;
  const [formStatus, setFormStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name && !email && !gender && !phone && !password)
      return setFormStatus("All fields are mandatory");
    if (validateName(name)) return setFormStatus(validateName(name));
    if (validateEmail(email)) return setFormStatus(validateEmail(email));
    if (validateGender(gender)) return setFormStatus(validateGender(gender));
    if (validatePhone(phone)) return setFormStatus(validatePhone(phone));
    if (validatePassword(password))
      return setFormStatus(validatePassword(password));
    alert(`Hello ${email.split("@")[0]}`);
    setFormStatus("Your form has been submitted successfully");
  }

  function validateName(name) {
    const trimmed = name.trim();
    if (/^[a-zA-Z\s]+$/.test(trimmed)) return "";
    return "Name is not alphanumeric";
  }

  function validateEmail(email) {
    const trimmed = email.trim();
    if (/[@]/.test(trimmed)) return "";
    return "Email must contain @";
  }

  function validateGender(gender) {
  if (["male", "female", "other"].includes(gender)) return "";
  return "Please identify as male, female or other";
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
      </form>
    </div>
  ); // prettier-ignore
};

export default Form;
