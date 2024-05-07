import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dontationscard = ({data}) => {
    
    const {picture, title, price, description, text_button_bg ,title_color} = data;
    // console.log(data);

    const handleDonations = () => {
        toast("Donation succeed !");
        // toast.success("Donation succeed !", {
        //     position: toast.POSITION.BOTTOM_RIGHT
          };

      
    
    
    return (
        <div>
            {/* //     <Helmet>
    //     <title>Donation Details: {id}</title>
    // </Helmet> */}
       <section className="py-24">
        
        <div className="container mx-auto px-5">
            <div className="space-y-5">
                <div className="relative">
                <div className="before:absolute before:bg-[rgba(26,25,25,0.43)] before:h-16 md:before:h-24 
                        before:w-full before:bottom-0">
                            <img className="w-full h-[200px] md:h-[500px] object-cover object-center" src={picture} alt={title} />
                        </div>
                        <button onClick={handleDonations}
                        className={`absolute bottom-3 md:bottom-[26px] z-10 left-5 px-5 py-2 text-white`} 
                        style={{backgroundColor:'#928a8a',color:`${text_button_bg}`}} >
                            Donate ${price}</button>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">{title}</h2>
                </div>
                <div>
                    <p className="font-serif" style={{color:`${text_button_bg}`}}>{description}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
       </section>
        </div>
    );
};

export default Dontationscard;