import React from "react";
import "../output.css"


// const ItemCard = ({ incrementCount, icon_File, name, count, decrementCount, removeProduct, }) => {
const ItemCard = ({
  incrementCount,
  imageUrl,
  name,
  count,
  level,
  // decrementCount,
  // removeItem,
  maxPrice,
  productionLocation,
  productionTime,
  xp,
  type
}) => {

  // <img src="./icons/cross.png" alt=""
  //   onClick={removeItem}
  //   className="absolute size-8 -top-2 -right-2 drop-shadow-lg drop-shadow-slate-900 hover:scale-125 hover:transition-transform duration-200 active:scale-100">
  // </img>

  return (
    <div
      onClick={incrementCount}
      className={`w-32 h-16 bg-slate-800 border hover:border-b-0 relative m-2 border-slate-600 rounded-2xl z-0 flex items-center pr-2 hover:border-t-slate-500 overflow-visible hover:shadow-inner hover:shadow-slate-600 group hover:cursor-pointer hover:scale-105 transition-all duration-75 select-none ease-in-out hover:drop-shadow-slate-950 hover:drop-shadow-md active:scale-95 drop-shadow-md drop-shadow-slate-800`}>
      <img
        // onClick={incrementCount}
        // onContextMenu={(e) => { e.preventDefault(); decrementCount() }}
        className="size-16 rounded-2xl z-10 group-hover:rotate-2 relative drop-shadow-slate-900 drop-shadow-lg group-hover:drop-shadow-xl group-hover:drop-shadow-slate-900 group-hover:scale-110 transition-all duration-300 ease-out" alt="" src={imageUrl} />
      <div
        // onClick={incrementCount}
        // onContextMenu={(e) => { e.preventDefault(); decrementCount() }}
        className="flex flex-col overflow-hidden text-slate-50 justify-start items-center h-fit mx-auto w-full z-20">
        <div className="relative justify-center items-center flex gap-2">
          <p className="relative text-slate-100 font-bold text-lg">
            {count}
          </p>
        </div>
        <div className="relative justify-center items-center flex gap-2">
          <p className="relative text-slate-400 font-bold text-sm text-center">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

// <div className="absolute mt-6 justify-center items-center flex opacity-0 gap-2 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-200">
//   <p className="relative text-sky-100/50 font-bold text-sm text-center">
//     {productionLocation}
//   </p>
// </div>
// <div className="absolute mt-10 justify-center items-center flex opacity-0 gap-2 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300">
//   <p className="relative text-sky-100/90 font-bold text-sm text-center">
//     {productionTime}{' '}mins
//   </p>
// </div>

// <div className='flex flex-row h-20 bg-blue-200 w-fit rounded-xl m-1 
//   justify-between shadow-black shadow-sm hover:shadow-lg 
//   hover:shadow-blue-900 group font-sans font-bold'>
//
//   <button className='rounded-xl m-1 border-0 bg-blue-100'
//     onClick={incrementCount}>
//
//     <img className='size-16 self-center z-20 m-auto rounded-lg'
//       src={icon_File} alt={name} />
//   </button>
//
//   <div className='flex-col m-1 rounded-lg text-center w-20 flex'>
//
//     <button onClick={incrementCount} className="my-auto size-full rounded-lg border-0 bg-blue-200">
//       {count < 1 && (
//         <div className='flex my-auto opacity-100 justify-center rounded-lg text-center text-sm font-semibold'>{name}</div>
//       )}
//       {count > 0 && (
//         <div className='flex my-auto justify-center rounded-lg text-center text-lg font-semibold'>{count}</div>
//       )}
//     </button>
//
//     <div className="flex-row w-20 flex justify-between">
//       {count > 0 && (
//         <button onClick={decrementCount} className='font-extrabold border-2 my-auto
//           border-red-600 rounded-lg z-10 bg-red-200 text-center text-red-600 
//           hover:bg-red-100 active:bg-red-50 w-8'>
//           ⊖
//         </button>
//       )}
//
//       {count > 0 && (
//         <button onClick={removeProduct} className='font-extrabold border-2 my-auto
//           border-red-600 rounded-lg z-10 bg-red-200 text-center text-red-600 
//           hover:bg-red-100 active:bg-red-50 w-8'>
//           x
//         </button>
//       )}
//     </div>
//
//   </div>
// </div>
//
/* :root { */
/*   --bg-dark: #090d10; */
/*   --bg: #121a21; */
/*   --bg-light: #1b2731; */
/*   --text: #f4f4f4; */
/*   --text-muted: #b8b8b8; */
/*   --highlight: #d9d9d9; */
/*   --border: #5f80a6; */
/*   --border-muted: #1b2731; */
/*   --primary: #5f80a6; */
/*   --secondary: #d6b7b1; */
/*   --danger: hsl(9 26% 64%); */
/*   --warning: hsl(52 19% 57%); */
/*   --success: hsl(146 17% 59%); */
/*   --info: hsl(217 28% 65%); */
/* } */
//
// :root {
//   --bg-dark: hsl(228 79% 2%);
//   --bg: hsl(222 55% 5%);
//   --bg-light: hsl(220 35% 10%);
//   --text: hsl(220 100% 98%);
//   --text-muted: hsl(220 35% 73%);
//   --highlight: hsl(220 20% 42%);
//   --border: hsl(220 26% 31%);
//   --border-muted: hsl(220 37% 20%);
//   --primary: #5f80a6;
//   --secondary: #d6b7b1;
//   --danger: hsl(9 40% 60%);
//   --warning: hsl(52 40% 60%);
//   --success: hsl(146 40% 50%);
//   --info: hsl(217 40% 60%);
// }
