import PlusIcon from "./plus.svg";

interface AddItemProp {
  toggleModal: () => void;
}

function AddItem({ toggleModal }: AddItemProp) {
  return (
    <button
      className="rounded-full bg-white/30 drop-shadow-lg"
      onClick={toggleModal}
    >
      <img src={PlusIcon} alt="React Logo" />
    </button>
  );
}

export default AddItem;
