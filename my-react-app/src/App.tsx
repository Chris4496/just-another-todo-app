import React from "react";
import List from "./component/List";
import AddItem from "./component/AddItem";
import Modal from "./component/Modal";
import { useState, useEffect } from "react";
import { ItemProps } from "./interfaces";

function App() {
  const [list, setList] = useState<ItemProps[]>(() => {
    const saved = localStorage.getItem("list");
    const initialValue = JSON.parse(saved!);
    return initialValue || [];
  });

  // const [list, setList] = useState<ItemProps[]>([
  //   {
  //     id: 1,
  //     title: "Lorem Ipsum",
  //     description: "Lorem Ipsum is simply dummy text ",
  //   },
  //   {
  //     id: 2,
  //     title: "Why do we use it?",
  //     description:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page",
  //   },
  //   {
  //     id: 3,
  //     title: "Where does it come from?",
  //     description:
  //       "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  //   },
  // ]);
  useEffect(() => {
    // storing input name
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = (item: ItemProps) => {
    setList([...list, item]);
  };

  const removeItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleAddItem = (title: string, description: string) => {
    const id = new Date().getTime();
    const item: ItemProps = { id, title, description };
    addItem(item);
  };

  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="bg-[url('https://picsum.photos/1920/1080')] min-h-screen flex flex-col flex-end content-start">
      <div className="relavtive m-auto backdrop-blur-sm backdrop-opacity-90 drop-shadow-lg bg-white/30 rounded-md py-5 px-10">
        <List itemList={list} removeItem={removeItem} />
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
