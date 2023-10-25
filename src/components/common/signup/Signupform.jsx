import React from "react";
import { useState } from "react";
import "./Signupform";
const Signupform = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
  };

  return (
    <div className="main-container">
    <div className="container-form">
    <form onSubmit={handleSubmit}>
      <label className="Email">
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field"/>
      </label>
      <label className="Password">
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field"/>
      </label>
      <label className="Confirm-pass">
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input-field"/>
      </label>
      <button type="submit" className="Signup">Signup</button>
    </form></div>
    </div>
  );
}
export default Signupform;