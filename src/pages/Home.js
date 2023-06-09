import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchBikes");
    setUsers(result.data);
  };

  const deletebikes = async (id) => {
    await axios.delete(`http://localhost:8080/deleteBikes/${id}`);
    loadUsers();
  };
  


  return (
    <div className="container1" style={{backgroundColor:"transparent"}}>
      <div className="py-10">
     
        <table className="tablebordershadow" >
          <thead>
            <tr style={{color:"white"}}>
              <th scope="col">No</th>
              <th scope="col">Id</th>
              <th scope="col">BikeModel</th>
              <th scope="col">BikeName</th>
              <th scope="col">Colours</th>
              <th scope="col">Engine</th>
              <th scope="col">FuelTankCapacity</th>
              <th scope="col">Mileage</th>
              <th scope="col">Power</th>
              <th scope="col">Price</th>
              <th scope="col">Torque</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((bike, index) => (
              <tr style={{color:"white"}}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{bike.id}</td>
                <td>{bike.bikemodel}</td>
                <td>{bike.bikename}</td>
                <td>{bike.colours}</td>
                <td>{bike.engine}</td>
                <td>{bike.fueltankcapacity}</td>
                <td>{bike.mileage}</td>
                <td>{bike.power}</td>
                <td>{bike.price}</td>
                <td>{bike.torque}</td>
                <td>
                    <Link className="btn btn-primary mx-2" style={{backgroundColor:"#9400d3",color:"white",paddingTop:"10px",fontSize:"medium"}} to={`/updatebikes/${bike.id}`}>Edit</Link>

                    

                    <button 
                    className="btn btn-danger mx-2"style={{backgroundColor:" #ff00ff",color:"white",paddingTop:"10px",fontSize:"medium"}}
                    onClick={() => deletebikes(bike.id)}
                       > Delete
                        </button>
                
                </td>
               

             
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/addbikes" >
            <button style={{backgroundColor:"#a6ff00",color:"black",marginLeft:"400px",marginTop:"30px"}}>Add Bikes</button>
        </Link>
        
        
      </div>
    </div>
  );
}

