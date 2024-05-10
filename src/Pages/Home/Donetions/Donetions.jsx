


import React, { useEffect, useState } from "react";
import Donetcard from "./Donetcard.jsx/Donetcard";

const Donetions = () => {
    const [donations, setDonations] = useState([]);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const DonationsItems = JSON.parse(localStorage.getItem('Donations'));
        if (DonationsItems) {
            setDonations(DonationsItems);
        } else {
            console.log('no data found');
        }
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2 justify-center ">
                {isShow ? (
                    donations.map((data) => (
                        <Donetcard key={data.id} data={data}></Donetcard>
                    ))
                ) 
                : 
                (
                    donations.slice(0, 2).map((data) => (
                        <Donetcard key={data.id} data={data}></Donetcard>
                    ))
                )}
            </div>
            <button onClick={() => setIsShow(!isShow)} className="px-5 bg-cyan-700 max-auto ">
                {isShow ? "HIDE" : "SEE ALL"}
            </button>
        </div>
    );
};

export default Donetions;
















// import { data } from "autoprefixer";
// import { useEffect, useState } from "react";
// import Donetcard from "./Donetcard.jsx/Donetcard";
// import { key } from "localforage";
// import { useLoaderData } from "react-router-dom";


// const Donetions = () => {
   
// const [donations,setDonations]=useState([])
// const[isShow, setIsShow]=useState(false)

// useEffect(()=>{
//     const DonationsItems=JSON.parse(localStorage.getItem('Donations'))

//     if(DonationsItems){

//         setDonations(DonationsItems)
//     }
//     else{
//         console.log('no data found');
//     }

// },[])
// console.log(isShow);

//  return (
//     <div>

// <div className="grid grid-cols-2">
  

//     {
//     isShow donations.map((data)=>(
//         <Donetcard key={data.id} data={data}></Donetcard>))

// :donations.slice(0.2).map((data)=>(
//     <Donetcard key={data.id} data={data}></Donetcard>
//     ))

//     }
//    </div>

//   <button onClick={()=>setIsShow(isShow)} className="px-5 bg-cyan-700 max-auto">SEE ALL</button>
// </div>

//     );
    
// };

// export default Donetions;