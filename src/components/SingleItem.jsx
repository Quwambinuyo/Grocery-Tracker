import React from "react"; // Import React library

// Functional component that represents a single item, taking 'item', 'removeItem', and 'editItem' as props
const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)} // Toggle completion status
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none", // Apply line-through when completed
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)} // Remove item when clicked
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
