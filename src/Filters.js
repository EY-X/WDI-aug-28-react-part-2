import React from "react";
import FilterItem from "./FilterItem";

class Filters extends React.Component {
  handleFilterClick = () => {};
  constructor(props) {
    super(props);

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props.filters);
    this.setState({
      filters: this.props.filters
    });
  };

  render() {
    return (
      <section id="filterCategories">
              
        <ul className="filters">
          {this.props.filters.map((filter, i) => (
            <FilterItem
              key={i}
              id={i}
              filter={filter}
              // handleFilterSelected={handleFilterClick}
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
