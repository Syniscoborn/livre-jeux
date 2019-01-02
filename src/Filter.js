import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      blue: false
    };
  }

  handleClick = () => {
    this.props.selectedListItem(this.props.filter);
  };

  render() {
    let btnChangeColor = this.props.activeFilters
      ? "selectedListItem"
      : "unselectedListItem";

    return [
      <li
        key={this.props.index}
        className={"list-group-item " + btnChangeColor}
        onClick={e => this.handleClick()}
      >
        {this.props.filter}
      </li>
    ];
  }
}

export default Filter;
