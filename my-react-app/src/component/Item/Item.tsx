import React from "react";
import RemoveButton from "../RemoveButton";
import { ItemProps } from "../../interfaces";

interface Props {
  prop: ItemProps;
  removeItem: (id: number) => void;
}

function Item({ prop, removeItem }: Props) {
  const { id, title, description } = prop;
  return (
    <div className="flex w-full py-2 px-4 my-1 bg-white/30 drop-shadow-lg rounded-md">
      <div className="container">
        <h1 className="font-bold text-2xl break-all">{title}</h1>
        <p className="text-lg break-all">{description}</p>
      </div>
      <div>
        <RemoveButton removeItem={removeItem} id={id} />
      </div>
    </div>
  );
}

export default Item;
