import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { add } from "../features/items/itemsSlice";

const ListItemForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(add({ id: uuid(), title: title, hide: false }));
  };
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="item-input">Item:</label>
        <input id="item-input" type="text" onChange={onChangeInput} />
      </div>
      <div>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default ListItemForm;
