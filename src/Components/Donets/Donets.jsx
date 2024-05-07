import Donetscard from "./Donetscard/Donetscard";


const Donets = ({Donets}) => {
   
  
    return (
        <div>
            <h1 className="text-2xl py-6 text-center">this our donations card</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
               {
                Donets?.map(Donet=> <Donetscard key={Donet.id} Donet={Donet}></Donetscard>)
               }
            </div>
        </div>
    );
};

export default Donets;