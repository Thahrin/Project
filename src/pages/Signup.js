import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';

export default function Signup() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    
    name: "",
    gender: "",
    phoneNo: "",
    emailId: "",
    password: "",
    confirmpassword: "",
    position: "",
    country: "",
    city: "",
    address: "",
  });

  const { name,gender,phoneNo,emailId,password,confirmpassword,position,country,city,address } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addname", user);
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">REGISTER USER</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNo" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailId" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email address"
                name="emailId"
                value={emailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ConfirmPassword" className="form-label">
               
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your confirm password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
              
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your position-rental/owned"
                name="position"
                value={position}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your country"
                name="country"
                value={country}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your City"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
               
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btnstyle">Login</button>
            <Link className="btnsty"to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}