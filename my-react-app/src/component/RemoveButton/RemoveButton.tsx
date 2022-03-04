import React from "react";
import { ItemProps } from "../../interfaces";

interface RemoveButtonProps {
  removeItem: (id: number) => void;
  id: number;
}

function RemoveButton({ removeItem, id }: RemoveButtonProps) {
  return (
    <button className="rounded-full" onClick={() => removeItem(id)}>
      &#x2715;
    </button>
  );
}

export default RemoveButton;
