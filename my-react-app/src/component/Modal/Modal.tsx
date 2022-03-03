import React from "react";

interface ModalProps {
  showModal: boolean;
  toggleModal: () => void;
  handleAddItem: (title: string, description: string) => void;
}

function Modal({ showModal, toggleModal, handleAddItem }: ModalProps) {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);

  const handler = () => {
    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;
    if (title) {
      handleAddItem(title, description);
      toggleModal();
    }
  };

  return showModal ? (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Add Item</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                ref={titleRef}
              />
              <label className="block text-black text-sm font-bold mb-1">
                Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                ref={descriptionRef}
              />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => toggleModal()}
            >
              Cancel
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => handler()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
