import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donetions from "../Pages/Home/Donetions/Donetions";
import Statistics from "../Pages/Home/Statistics/Statistics";
import DonationDetails from "../Pages/Home/DonationDetails/DonationDetails";

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
   },
   {
    path:"/details/:id",
    element:<DonationDetails></DonationDetails>,
    loader:()=>fetch('/Donets.json')
    

   }
   
   ]
}

])

export default myCreatedRoute;