import React from "react";
import ListItem from "./ListItem";

const List = ({
  items,
  incrementItem,
  decrementItem,
  currentlySelectedFilter
}) => {
  const toFilter = currentlySelectedFilter != "all";
  console.log(toFilter);
  const itemElements = items.map((item, i) =>
    toFilter ? (
      item.type == currentlySelectedFilter ? (
        <ListItem
          key={i}
          item={item}
          onIncrementClick={() => incrementItem(i)}
          onDecrementClick={() => decrementItem(i)}
        />
      ) : null
    ) : (
      <ListItem
        key={i}
        item={item}
        onIncrementClick={() => incrementItem(i)}
        onDecrementClick={() => decrementItem(i)}
      />
    )
  );

  return (
    <ul id="shoppingList" className="shoppinglist">
      {itemElements}
    </ul>
  );
};

export default List;
