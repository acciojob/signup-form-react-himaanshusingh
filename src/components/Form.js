import React, { useState } from "react";

const emptyValues = { name: "", email: "", gender: "", phone: "", password: "" }; // prettier-ignore
const emptyErrors = { nameErr: "", emailErr: "", genderErr: "", phoneErr: "", passwordErr: "" }; // prettier-ignore

const Form = () => {
  const [values, setValues] = useState(emptyValues);
  const { name, email, gender, phone, password } = values;
  const [errors, setErrors] = useState(emptyErrors);
  const { nameErr, emailErr, genderErr, phoneErr, passwordErr } = errors;
  const [formStatus, setFormStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [`${name}Err`]: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const genderErr = validateGender(gender);
    const phoneErr = validatePhone(phone);
    const passwordErr = validatePassword(password);
    const newErrors = { nameErr, emailErr, genderErr, phoneErr, passwordErr };
    const hasError = Object.values(newErrors).some((err) => err != "");
    if (hasError) {
      setErrors(newErrors);
      return setFormStatus("Please fix the above errors");
    }
    alert(`Hello ${email.split("@")[0]}`);
    setFormStatus("Your form has been submitted successfully");
  }

  function validateName(name) {
    const trimmed = name.trim();
    if (!trimmed) return "Name is required";
    if (/^[a-zA-Z]+$/.test(trimmed)) return "";
    return "Name is not alphanumeric";
  }

  function validateEmail(email) {
    const trimmed = email.trim();
    if (!trimmed) return "Email is required";
    if (/[@]/.test(trimmed)) return "";
    return "Email must contain @";
  }

  function validateGender(gender) {
    const trimmed = gender.trim();
    if (!trimmed) return "Gender is required";
    if (["male", "female", "other"].includes(trimmed)) return "";
    return " Please identify as male, female or others";
  }

  function validatePhone(phone) {
    const trimmed = phone.trim();
    if (!trimmed) return "Phone is required";
    if (/^[0-9]+$/.test(trimmed)) return "";
    return "Phone Number must contain only numbers";
  }

  function validatePassword(password) {
    const trimmed = password.trim();
    if (!trimmed) return "Name is required";
    if (trimmed.length >= 6) return "";
    return "Password must contain atleast 6 letters";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name *</label>
        <input type="text" data-testid="name" name="name" onChange={handleChange} value={name}/>
        <span>{nameErr}</span>
        <label>Email *</label>
        <input type="text" data-testid="email" name="email" onChange={handleChange} value={email}/>
        <span>{emailErr}</span>
        <label>Gender *</label>
        <input type="text" data-testid="gender" name="gender" onChange={handleChange} value={gender} />
        <span>{genderErr}</span>
        <label>Phone Number *</label>
        <input type="text" data-testid="phoneNumber" name="phone" onChange={handleChange} value={phone}/>
        <span>{phoneErr}</span>
        <label>Password *</label>
        <input type="password" data-testid="password" name="password" onChange={handleChange} value={password}/>
        <span>{passwordErr}</span><br />
        <button data-testid="submit">Submit</button>
        <p>{formStatus}</p>
      </form>
    </div>
  ); // prettier-ignore
};

export default Form;
