
















 import { NavLink } from "react-router-dom";
 import Logo from "./Logo/Logo";


const Navbar = () => {
    return (
        <div className=" font-serif  ">
         <nav>
      
         <ul className=" flex justify-end gap-5 py-6 mr-4 px-5  shadow-sm shadow-slate-400 ">
          <Logo></Logo>
         <li>
    <NavLink
       to="/"
      className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-red-600 underline" : ""
         }
 >
   Home
   </NavLink>
   </li>
   <li>
   <NavLink
       to="/donetions"
      className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "text-red-600 underline" : ""
         }
 >
  Donetion


 </NavLink>
   </li>

 <li>
 <NavLink
       to="/statistics"
      className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "text-red-600 underline" : ""
         }
 >
   Statistics

  
 </NavLink>
 </li>
        </ul>
     
 </nav>
 </div>
    );
 };

 export default Navbar;