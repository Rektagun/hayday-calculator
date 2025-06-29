import React from "react";
import "../output.css"

const NeedItemCard = ({
  incrementCount,
  imageUrl,
  name,
  count,
  level,
  decrementCount,
  removeItem,
  maxPrice,
  productionLocation,
  productionTime,
  xp,
  type
}) => {

  return (
    <div
      onClick={decrementCount}
      // onClick={incrementCount}
      className={`w-40 h-20 bg-slate-800 hover:bg-red-950/75 border hover:border-b-0 relative m-2 border-slate-600 rounded-2xl z-0 flex items-center pr-2 hover:border-t-red-800 overflow-visible hover:shadow-inner opacity-100 group hover:cursor-pointer hover:scale-105 transition-all duration-200 select-none ease-in-out hover:drop-shadow-slate-950 hover:drop-shadow-md active:scale-95 drop-shadow-md`}>
      <img
        // onClick={incrementCount}
        // onContextMenu={(e) => { e.preventDefault(); decrementCount() }}
        className="size-20 rounded-2xl z-10 group-hover:rotate-2 relative drop-shadow-slate-900 drop-shadow-lg group-hover:drop-shadow-xl group-hover:drop-shadow-slate-900 group-hover:scale-110 transition-all duration-300 ease-out" alt="" src={imageUrl} />
      <img src="./icons/cross.png" alt=""
        onClick={decrementCount}
        className="absolute size-8 -top-2 -right-2 drop-shadow-lg drop-shadow-slate-900 hover:scale-125 hover:transition-transform duration-200 active:scale-100">
      </img>
      <div
        // onContextMenu={(e) => { e.preventDefault(); decrementCount() }}
        className="flex flex-col text-slate-50 justify-start items-center h-fit mx-auto w-full">
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

export default NeedItemCard;
