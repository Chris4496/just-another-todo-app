import React from "react";
import { ItemProps } from "../../interfaces";

function Item(prop: ItemProps) {
  const { id, title, description } = prop;
  return (
    <div className="container w-full py-2 px-4 my-1 bg-white/30 drop-shadow-lg rounded-md">
      <h1 className="font-bold text-2xl break-all">{title}</h1>
      <p className="text-lg break-all">{description}</p>
    </div>
  );
}

export default Item;
