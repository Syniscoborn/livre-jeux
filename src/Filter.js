import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  handleClick = () => {
    this.props.selectedListItem(this.props.filter);
    if (this.state.active) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  };

  render() {

    return [
      <li
        key={this.props.index}
        className={"list-group-item " + (this.state.active ? 'selectedListItem' : 'unselectedListItem')}
        onClick={e => this.handleClick()}
      >
        {this.props.filter}
      </li>
    ];
  }
}

export default Filter;
