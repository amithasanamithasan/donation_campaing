

const Donetcard = ({data}) => {
      
    const {id,picture, title, price,category ,description, text_button_bg ,title_color} = data;
    return (
        <div>
             <div className={`flex  py-8 gap-5 items-center justify-between md:justify-normal rounded-lg`}>
                <div className="w-1/2 md:w-auto">
                    <img className="w-40 h-36 object-cover" src={picture} alt="" />
                </div>
                <div className="space-y-1 py-2 w-1/2 md:w-auto font-serif">
                    <h5 className="inline-block px-2 rounded-sm py-1 text-xs font-bold"  style={{color:`${text_button_bg}`}}>{category}</h5>
                    {/* <h3 className="text-sm md:text-xl">{title}</h3> */}
                    <p className="text-lg font-semibold" style={{color:`${text_button_bg}`}}>${price}</p>
                    <button className="px-4 py-1 text-base md:text-lg rounded-lg text-white" style={{backgroundColor:`${text_button_bg}`}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Donetcard;