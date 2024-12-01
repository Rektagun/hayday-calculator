import React from "react";
import "../output.css"

function ItemCard() {
  return (

      <div className='flex flex-row h-20 bg-white w-fit rounded-xl m-1
        border-2 border-gray-600 justify-between'>

        <img className='size-16 self-center ml-1 rounded-lg' 
          src='./icons/Corn.webp' alt='Spicy_Pizza' />

        <div className='flex flex-col m-1 p-1 rounded-lg justify-start 
          border-black border bg-blue-100'>
          <h1 className='font-extrabold border-2 border-black rounded-lg 
          bg-white text-center'>3</h1>
          <h1 className='text-gray-700 text-sm rounded-lg'>Spicy Pizza</h1>
          <h1 className='text-blue-900 text-xs rounded-lg'>Bakery</h1>
        </div>


        {/* <div className='absolute flex flex-col justify-between gap-1 
        rounded-lg'> */}

        {/*   <button className='text-green-600 flex m-auto font-extrabold 
        text-3xl'> */}
        {/*     ⊕ */}
        {/*   </button> */}

        {/*   <button className='text-red-500 flex m-auto font-extrabold 
        text-3xl'> */}
        {/*     {/1* ⊗ *1/} */}
        {/*     ⊖ */}
        {/*   </button> */}

        {/* </div> */}

      </div>

  );
}

export default ItemCard;
