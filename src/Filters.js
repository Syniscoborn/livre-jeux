import React from "react";
import Filter from "./Filter";
import uniqid from "uniqid";

const Filters = props => {
  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      {Object.values(props.filters).map((filter, index) => {
        return (
          <Filter
            key={index}
            index={index}
            filter={filter}
            selectedListItem={props.selectedListItem}
          />
        );
      })}
    </ul>
  );
};

export default Filters;
