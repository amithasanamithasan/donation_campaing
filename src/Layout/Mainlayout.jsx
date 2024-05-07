import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const Mainlayout = () => 
    (
    <div className="mx-10"> 
        <Navbar></Navbar>
        <Outlet></Outlet>
    
       
    </div>
);

export default Mainlayout;