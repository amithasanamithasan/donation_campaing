
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Donets from "../../Components/Donets/Donets";



const Home = () => {
    
const donetsdata=useLoaderData()

    return (
        <div>
           
           <Banner></Banner>
           <Donets Donets={donetsdata}></Donets>
          <div>
          
          </div>

        </div>
    );
};

export default Home;