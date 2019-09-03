import React from "react";
import FilterItem from "./FilterItem";

class Filters extends React.Component {
  handleFilterClick = () => {};
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.setState({
      filters: this.props.filters
    });
  };

  render() {
    //console.log("logx:" + this.props.handleFilterClick);
    return (
      <section id="filterCategories">
              
        <ul className="filters">
          {this.props.filters.map((filter, i) => (
            <FilterItem
              key={i}
              id={i}
              filter={filter}
              handleFilterClick={this.props.handleFilterClick}
              checked={filter.value == this.props.currentlySelectedFilter}
            />
          ))}
        </ul>
              
        <form id="newCat" className="cat-new">
                  
          <input
            type="text"
            name="item"
            id="itemName"
            className="form-component inpt"
            placeholder="New Category"
          />
                
        </form>
            
      </section>
    );
  }
}

export default Filters;

// const Filters = ({ filters, onFilterClick }) => {
//   return (
//     <section id="filterCategories">
//
//       <ul className="filters">
//
//         {filters.map((filter, i) => {
//           //console.log(filter);
//           return (
//             <FilterItem
//               key={i}
//               id={i}
//               filter={filter}
//               handleFilterSelected={onFilterClick}
//             />
//           );
//         })}
//
//       </ul>
//
//       <form id="newCat" className="cat-new">
//
//         <input
//           type="text"
//           name="item"
//           id="itemName"
//           className="form-component inpt"
//           placeholder="New Category"
//         />
//
//       </form>
//
//     </section>
//   );
// };

// export default Filters;
