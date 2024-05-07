import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donetions from "../Pages/Home/Donetions/Donetions";
import Statistics from "../Pages/Home/Statistics/Statistics";

const myCreatedRoute= createBrowserRouter([
{
    path:"/",
    element:<Mainlayout></Mainlayout>,

   children:[ 
    {
    path:"/",
    element: <Home></Home>,
    loader:()=> fetch('/Donets.json')
   },

   {
    path:"/donetions",
    element:<Donetions></Donetions>
   },
   {
    path:"/statistics",
    element:<Statistics></Statistics>
   }
   
   ]
}

])

export default myCreatedRoute;