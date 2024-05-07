


const Donetscard = ({Donet}) => {
    const {id,picture,title, price,title_color, category,description,card_bg,text_button_bg,category_bg} = Donet||{}
    return (
        <div>
   <div
  className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: `${card_bg}` }}>
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
      src={picture}   />
  </div>
  <div className="p-6">
  <div>
    <h3 className="font-semibold" style={{ color: `${text_button_bg}` }}>{title}</h3>
  </div>
  <div>
              <h5
                className="inline-block px-1 font-serif"
                style={{
                  // backgroundColor: `${category_bg}`,
                  color: `${text_button_bg}`,
                }}
              >
                {category}
              </h5>
            </div>
    
  </div>
 
</div>  

</div>
    );
};

export default Donetscard;