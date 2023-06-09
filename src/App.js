
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addbikes from "./bikes/Addbikes";
import Updatebikes from "./bikes/Updatebikes";
import Signup from "./pages/Signup";

function App() {

  return (
   <div className="App">
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/"element={<Login/>} />
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/addbikes" element={<Addbikes />}/>
          <Route exact path="/updatebikes/:bikeId" element={<Updatebikes/>}/>
          <Route exact path="/signup" element={<Signup />}/>
        </Routes>
    </Router>
      
    </div>
    
  );
}


export default App;