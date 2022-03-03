import React from "react";
import List from "./component/List";
import AddItem from "./component/AddItem";
import Modal from "./component/Modal";
import { useState } from "react";
import { ItemProps } from "./interfaces";

function App() {
  const [list, setList] = useState<ItemProps[]>([]);

  const addItem = (item: ItemProps) => {
    setList([...list, item]);
  };

  const handleAddItem = (title: string, description: string) => {
    const id = list.length + 1;
    const item: ItemProps = { id, title, description };
    addItem(item);
  };

  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="bg-[url('https://picsum.photos/1920/1080')] min-h-screen flex flex-col flex-end content-start">
      <div className="relavtive m-auto backdrop-blur-sm backdrop-opacity-90 drop-shadow-lg bg-white/30 rounded-md py-5 px-10 ">
        <List itemList={list} />
        <div className="flex justify-center items-center mt-2">
          <AddItem toggleModal={toggleModal} />
        </div>
      </div>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;
