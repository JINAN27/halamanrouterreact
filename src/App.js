import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Halaman Route</h1>
     <Link to="/home" className="mr" >Home</Link>
     <Link to="/about" className="mr" >About</Link>
     <Link to="/contact" className="mr" >Contact</Link>
     <Outlet/>
    </div>
  );
}

export default App;
