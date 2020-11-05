import logo from "./logo.svg";
import "./App.css";
import React from "react";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
];

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{this.props.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.category}</div>
        <h5 className="price">{this.props.price}€</h5>
      </div>
    );
  }
}

// APARTADO A
// class ItemList extends React.Component {
//   render() {
//     const arrayOfItemsJSX = arrayOfItems.map((element) => {
//       return (
//         <li>
//           <Item
//             name={element.name}
//             description={element.description}
//             quantity={element.quantity}
//             category={element.category}
//             price={element.price}
//           />
//         </li>
//       );
//     });
//     return <ul className="item-list">{arrayOfItemsJSX}</ul>;
//   }
// }

// APARTADO B

class ItemList extends React.Component {
  render() {
    const arrayOfItemsJSX = arrayOfItems
      .filter((element) => element.price < 10)
      .map((element) => {
        return (
          <li>
            <Item
              name={element.name}
              description={element.description}
              quantity={element.quantity}
              category={element.category}
              price={element.price}
            />
          </li>
        );
      });
    return <ul className="item-list">{arrayOfItemsJSX}</ul>;
  }
}

export default ItemList;
