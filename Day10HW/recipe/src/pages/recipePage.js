import React, { useState } from "react";
import { Item } from "../models/Item.js";
import { RecipeServices } from "../services/recipeServices.js";
import { IngredientList } from "../components/IngredientList.js";
import "bootstrap/dist/css/bootstrap.css";
import "./recipePage.css";

export default function RecipePage() {
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
    setCurItem(new Item("", "", ""));
  }

  async function updateItem(name, quantity, description, id) {
    let tempArr = items.slice();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        tempArr[i].name = name;
        tempArr[i].quantity = quantity;
        tempArr[i].description = description;
        break;
      }
    }
    setItems(tempArr);
    await RecipeServices.editItem(name, quantity, description, id);
  }

  async function deleteItem(id) {
    let tempArr = items.slice();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        tempArr.splice(i, 1);
        break;
      }
    }
    setItems(tempArr);
    await RecipeServices.removeItem(id);
  }

  return (
    <div>
      <div className="container">
        <div className="card text-center p-3">
          <h1> Ingredients List </h1>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={curItem.name}
                onChange={editName}
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Quantity"
                value={curItem.quantity}
                onChange={editQuantity}
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={curItem.description}
                onChange={editDescription}
              ></input>
              <button
                type="submit"
                className="btn btn-secondary input-group-append"
                onClick={appendItem}
              >
                +
              </button>
            </div>
          </form>
          <hr></hr>
          <IngredientList
            items={items}
            updateItem={updateItem}
            deleteItem={deleteItem}
          ></IngredientList>
        </div>
      </div>
    </div>
  );
}
