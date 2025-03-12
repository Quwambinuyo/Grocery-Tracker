import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

// Functional component that renders a form for adding new grocery items, taking 'addItem' as a prop
const Form = ({ addItem }) => {
  // State to manage the name of the new item being added
  const [newItemName, setNewItemName] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!newItemName) {
      toast.error("pleaase provide a value");

      return;
    } // If the input is empty, do nothing
    addItem(newItemName); // Call the addItem function with the new item name
    setNewItemName(""); // Reset the input field after submission
  };

  return (
    <>
      {/* Form for adding new grocery items */}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Set up form submission with handleSubmit */}
        <h4>grocery bud</h4> {/* Heading for the form */}
        <div className="form-control">
          {" "}
          {/* Container for input and button */}
          {/* Input field for new item name */}
          <input
            type="text" // Input of type text for item name
            className="form-input" // Styling class for the input
            value={newItemName} // Sets input value from state
            onChange={(e) => setNewItemName(e.target.value)} // Update state on input change
          />
          {/* Button to submit the form */}
          <button type="submit" className="btn">
            {" "}
            {/* Button to add the item */}
            Add item {/* Button label */}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form; // Exporting the Form component for use in other parts of the application
