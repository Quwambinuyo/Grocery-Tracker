import React, { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);

    toast.success("Item added to the list", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);

    toast.success("Item successfully removed", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const editItem = (itemId) => {
    const newEditItems = items.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );

    setItems(newEditItems);
    setLocalStorage(newEditItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={2000} />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
