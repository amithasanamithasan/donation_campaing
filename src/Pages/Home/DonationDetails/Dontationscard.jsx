import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
const Dontationscard = ({data}) => {
    
    const {id,picture, title, price, description, text_button_bg ,title_color} = data;
    // console.log(data);

    const [clicked, setClicked] = useState(false);


    const handleDonations = () => {

         const addDoantionsItmsArray=[];
        
         const DonationsItems=JSON.parse(localStorage.getItem('Donations'))  

      if(!DonationsItems)
        {
            addDoantionsItmsArray.push(data);
            localStorage.setItem('Donations',JSON.stringify(addDoantionsItmsArray))
            swal("Good job!", "Donets alredy successfully add!", "success");
        
      }
      

        else {

            const isExits =DonationsItems.find(data=>data.id==id)

     if(!isExits){
     addDoantionsItmsArray.push(...DonationsItems,data)
     localStorage.setItem('Donations',JSON.stringify(addDoantionsItmsArray))
    
       
                }

              else
              {
                swal("Error!", "Donets not duplicad added", "Error");
              }
         
        }
      
      
        toast.success("Donation succeed !");
        //  {
        //  position: toast.POSITION.BOTTOM_RIGHT
        // });

        setClicked(true)
    }
    
    
    return (
          <>
            {/* //     <Helmet>
    //     <title>Donation Details: {id}</title>
    // </Helmet> */}
       <section className="py-24 ">
            <div className="container mx-auto px-5">
                <div className="space-y-5">
                    <div className="relative">
                        <div className="before:absolute before:bg-[rgba(26,25,25,0.43)] before:h-16 md:before:h-24 
                        before:w-full before:bottom-0">
                            <img className="w-full h-[200px] md:h-[500px] object-cover object-center" src={picture} alt={title} />
                        </div>
<button disabled={clicked} onClick={handleDonations}
 className={`absolute bottom-3 md:bottom-[26px] z-10 left-5 px-5 py-2 text-white`} 
 style={clicked?{backgroundColor:'#928a8a',color:'#bab7b7',cursor:'not-allowed'}:{backgroundColor:`${text_button_bg}`}} >
 Donate ${price}</button>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold">{title}</h2>
                    </div>
                    <div>
                        <p className='font-serif' style={{color:`${text_button_bg}`}}>{description}</p>
                    </div>
                </div>
                <ToastContainer />
            </div>
           </section>
       </>
       
    );
};

export default Dontationscard;