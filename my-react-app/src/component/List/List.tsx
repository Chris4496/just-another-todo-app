import React, { useState } from "react";
import Item from "../Item";
import { ItemProps } from "../../interfaces";

interface ListProp {
  itemList: ItemProps[];
  removeItem: (id: number) => void;
}

function List({ itemList, removeItem }: ListProp) {
  return (
    <div className="divide-y-[1px] divide-black">
      <h1 className="text-4xl font-bold subpixel-antialiased">My List</h1>
      <div className="mx-auto max-w-md max-h-screen flex flex-col-reverse">
        {itemList.map((item) => (
          <Item key={item.id} prop={item} removeItem={removeItem} />
        ))}
        {!itemList.length ? (
          <div className="text-center text-2xl">
            <p>You have no items in your list</p>
            <p>Click the + button to add a item</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default List;
