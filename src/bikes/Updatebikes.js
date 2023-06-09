import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Updatebikes.css';


export default function Updatebikes() {
    let navigate = useNavigate();
    const { bikeId }=useParams();

    const [user, setUser] = useState({
      id: "",
      bikemodel: "",
      bikename: "",
      colours: "",
      engine: "",
      fueltankcapacity: "",
      mileage: "",
      power: "",
      price: "",
      torque: "",

    });
  
    const { id, bikemodel, bikename,colours,engine,fueltankcapacity,mileage,power,price,torque } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
      loadUser();
    },[])
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/updateBikes/${bikeId}`, user);
      navigate("/home");
    };

    const loadUser=async ()=>{
      const result=await axios.get(`http://localhost:8080/getBikes/${bikeId}`)
      setUser(result.data)
    }
    
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">EDIT BIKES</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
           
            <div className="mb-3">
                <label htmlFor="Id" className="form-label">
                 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Id"
                  name="id"
                  value={id}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Bikemodel" className="form-label">
                  
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Bikemodel"
                  name="bikemodel"
                  value={bikemodel}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Bikename" className="form-label">
                 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Bikename"
                  name="bikename"
                  value={bikename}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Colours" className="form-label">
                 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the No of Colours"
                  name="colours"
                  value={colours}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Engine" className="form-label">
                 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the Engine Type"
                  name="engine"
                  value={engine}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="FuelTankCapacity" className="form-label">
                
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the fueltankcapavity of th bike"
                  name="fueltankcapacity"
                  value={fueltankcapacity}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Mileage" className="form-label">
                
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the mileage of the bike"
                  name="mileage"
                  value={mileage}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Power" className="form-label">
                 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the power of the bike"
                  name="power"
                  value={power}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the price of the bike"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Torque" className="form-label">
                 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the torque of the bike"
                  name="torque"
                  value={torque}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btnstyle">
                Submit
              </button>
              <Link className="btnsty"to="/home">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}
