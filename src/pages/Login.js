import React,{useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import './Login.css';

export default function Login() {
 
    let navigate = useNavigate();

    const [login, setUser] = useState({
      
      username: "",
      password: "",
    });
  
    const {  username,password } = login;
  
    const onInputChange = (e) => {
      setUser({ ...login, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
    const r=await axios.post("http://localhost:8080/checkLogin", login);
    if(r.data==="Login success")
    {
      navigate("/home");
    }
      
      
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> LOGIN `</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  
                </label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btnstyle">Login</button>
              <Link className="btnsty"to="/signup">
                Signup
              </Link>
            </form>
            
          </div>
        </div>
      </div>
    );
  
}
