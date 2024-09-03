// src/OrderNowPage.js
import { useState } from "react";
import "./Order.css"; // Importing the CSS file for this page

import React from "react";

const pizzas = {
  margherita: "Pizza Focaccia",
  pepperoni: "Pizza Margherita",
  hawaiian: "Pizza Spinaci",
  veggie: "Pizza Funghi",
  bbqChicken: "Pizza Salamino",
  fourCheese: "Pizza Prosciutto",
};

function Order() {
  const [quantity, setQuantity] = useState(1);
  const [selectedPizza, setSelectedPizza] = useState(" ");
  const [orderList, setOrderList] = useState([]);

  const handleAddPizza = () => {
    const pizza = {
      name: pizzas[selectedPizza],
      quantity: quantity,
    };
    setOrderList([...orderList, pizza]);
    setSelectedPizza("");
    setQuantity(1);
  };

  const handleSubmitOrder = () => {
    // Handle the order submission logic here
    alert("Order submitted: " + JSON.stringify(orderList, null, 2));
    setOrderList([]); // Clear the order list after submission
  };

  return (
    <div className="app">
      <h1 style={{ fontFamily: "Quicksand" }}>Order Your Pizza</h1>

      <form
        className="add-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddPizza();
        }}
      >
        <div>
          <label>Quantity:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Pizza:</label>
          <select
            value={selectedPizza}
            onChange={(e) => setSelectedPizza(e.target.value)}
          >
            {Object.keys(pizzas).map((pizzaKey) => (
              <option value={pizzaKey} key={pizzaKey}>
                {pizzas[pizzaKey]}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Enter</button>
      </form>

      <div className="list">
        <h2>Your Order</h2>
        <ul>
          {orderList.map((pizza, index) => (
            <li key={index}>
              {pizza.quantity} x {pizza.name}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmitOrder}>Submit Order</button>
    </div>
  );
}

export default Order;
