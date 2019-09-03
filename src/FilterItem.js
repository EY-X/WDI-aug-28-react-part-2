import React from "react";

class FilterItem extends React.Component {
  componentDidMount = () => {
    console.log(this.props.filters);
    this.setState({
      filter: this.props.filter,
      id: this.props.id,
      handleFilterSelected: this.props.handleFilterClick
    });
  };

  render() {
    return (
      <li>
        <input
          type="radio"
          name="category"
          value={this.props.filter.value}
          id={this.props.id}
          defaultChecked
        />
        <label
          onClick={() =>
            this.state.handleFilterSelected(this.props.filter.value)
          }
          htmlFor="filter0"
        >
          {this.props.filter.name}
        </label>
      </li>
    );
  }
}

export default FilterItem;

// const FilterItem = ({ filter, id, handleFilterSelected }) => {
//   const { name, value } = filter;

//   return (
//     <li>
//       <input
//         type="radio"
//         name="category"
//         value={value}
//         id={id}
//         defaultChecked
//       />

//       <label onClick={() => handleFilterSelected(value)} htmlFor="filter0">
//         {name}
//       </label>
//     </li>
//   );
// };

// export default FilterItem;
