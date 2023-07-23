import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantCategory = ({data}) => {

  const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
    setShowItems(!showItems);
    
  }

  return (
    <div >
        {/* Header */}
       <div className='bg-gray-100 py-5 w-1/2 mx-auto my-4 shadow-lg text-center'>
            <div className=' flex justify-between cursor-pointer' 
            onClick={handleClick}>
                <span className='text-lg font-bold'>
                  {data.title} ({data.itemCards.length})</span>
                  <span>⬇️</span>
            </div>

           {showItems && <ItemList items={data.itemCards} />}
        
        </div>
        
        
    </div>
  );
};

export default RestaurantCategory;