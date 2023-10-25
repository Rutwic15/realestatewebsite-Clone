import React from "react";
import Signupform from "./Signupform";
import "./Signup.css";
const Signup = ()=>{
    return (
        <div>
         <h1 className="Form-title">Signup Page</h1>
         <div className="sub-heading">Enter User Details</div>
         <Signupform/>
        </div>
    )
}
export default Signup;