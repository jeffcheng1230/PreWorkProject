import React, { useState } from "react";
import { Item } from "./models/Item.js";
import { RecipeServices } from "./services/recipeServices.js";
import { IngredientList } from "./components/IngredientList.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [curItem, setCurItem] = useState(new Item("", "", ""));

  function editName(e) {
    setCurItem(new Item(e.target.value, curItem.quantity, curItem.description));
  }

  function editQuantity(e) {
    setCurItem(new Item(curItem.name, e.target.value, curItem.description));
  }

  function editDescription(e) {
    setCurItem(new Item(curItem.name, curItem.quantity, e.target.value));
  }

  async function appendItem(e) {
    e.preventDefault();
    let item = new Item(curItem.name, curItem.quantity, curItem.description);
    item = await RecipeServices.addItem(item);
    setItems([...items, item]);
  }

  return (
    <div>
      <div className="container">
        <div className="card text-center p-3">
          <h1> Ingredients List </h1>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={editName}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Quantity"
              onChange={editQuantity}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={editDescription}
            ></input>
            <button
              className="btn btn-secondary input-group-append"
              onClick={appendItem}
            >
              +
            </button>
          </div>
          <hr></hr>
          <IngredientList
            items={items}
            editName={editName}
            editQuantity={editQuantity}
            editDescription={editDescription}
          ></IngredientList>
        </div>
      </div>
    </div>
  );
}
