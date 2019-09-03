import React from "react";

const Form = ({ addItem }) => {
  const addRef = React.createRef();

  const submitHandler = event => {
    event.preventDefault();

    let valueInTextBox = addRef.current.value.trim();

    const itemToAdd = valueInTextBox;

    if (itemToAdd) {
      addItem(itemToAdd);

      addRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      id="newItem"
      className="newitem"
      auto-complete="off"
    >
      <label htmlFor="itemName" className="line-label">
        New Item
      </label>
      <div className="addnew">
        <input
          ref={addRef}
          type="text"
          name="item"
          id="itemName"
          className="form-component inpt"
          placeholder="What do you need?"
        />
        <input type="submit" value="Add" className="form-component btn" />
      </div>
    </form>
  );
};

export default Form;
