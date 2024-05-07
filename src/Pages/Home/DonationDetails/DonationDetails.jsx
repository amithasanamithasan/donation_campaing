import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Dontationscard from "./Dontationscard";



const DonationDetails = () => {
  

    
    const[data,setData]=useState({});

    const {id}=useParams()
//params destactaring to find id 
const datas=useLoaderData();




useEffect(()=>{
 const findData = datas?.find(data=>data.id==id)
 setData(findData);
},[id,datas])



    return (
    <div>
        <Dontationscard data={data}></Dontationscard>
    </div>
    
    
    );
};

export default DonationDetails;