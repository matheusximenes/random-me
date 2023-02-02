import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ListItems = () => {
  const { items } = useSelector((state: RootState) => state.items);
  return (
    <div>
      {items.length > 0 ? (
        items.map((i) => <div key={i.id}>{i.title}</div>)
      ) : (
        <>No Items</>
      )}
    </div>
  );
};

export default ListItems;
