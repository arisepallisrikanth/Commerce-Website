import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { AddItemsToCart } from "../../app/CartSlice.js";

const Items = ({
  ifExists,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  const dispatch = useDispatch();

  const onaddToCart = () => {
    
    const item = { id, title, text, rating, img, price, color, shadow };
    dispatch(AddItemsToCart(item));
  };

  return (
    <div
      className={` relative bg-gradient-to-b ${color} ${shadow} rounded-xl grid items-center ${
        ifExists ? "justify-start" : "justify-center"
      } transitions-theme py-2 m-12 hover:scale-125 w-full`}
    >
      <div
        className={`grid items-center ${
          ifExists ? "justify-start" : "justify-center"
        } gap-2`}
      >
        <div className="font-medium text-xl lg:text-lg md:text-base text-slate-200 filter:drop-shadow-lg">
          <h1>{title}</h1>
        </div>
        <div className="font-normal text-lg lg:text-base md:text-sm text-white/80 filter:drop-shadow-lg ">
          <p>{text}</p>
        </div>
        <div className="flex  items-center my-0.5 justify-between w-28">
          <div className=" bg-white/80 rounded-xl flex items-center justify-center p-0.5 ">
            <h1 className="text-slate-900 text-medium">${price}</h1>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className=" icon-style  w-5 h-5 md:w-4 md:h-4 " />
            <h1 className="text-white md:text-sm font-normal">{rating}</h1>
          </div>
        </div>
        <div className="flex  gap-5 items-center  my-3 ">
          <button
            type="button"
            onClick={onaddToCart}
            className="blur-effect-theme button-theme p-0.5 bg-white/90 shadow shadow-sky-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            className="blur-effect-theme button-theme bg-white p-2 flex items-center justify-center rounded-xl shadow shadow-sky-200 text-black text-sm "
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={` grid items-center ${
          ifExists ? " absolute right-1 top-10" : "justify-center"
        } `}
      >
        <img
          src={img}
          alt={`${id}`}
          className={`${
            ifExists
              ? "-rotate-[35deg]  w-60 lg:w-58 sm:w-50 xsm:w-40 h-auto"
              : "w-40 h-autos py-1"
          } transitions-theme hover:-rotate-[12deg]  `}
        />
      </div>
    </div>
  );
};

export default Items;
