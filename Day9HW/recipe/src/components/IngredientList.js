import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Item } from "../models/Item";

export function IngredientList(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Quantity </th>
            <th> Description </th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={item.name}
                  onChange={(e) =>
                    props.updateItem(
                      e.target.value,
                      item.quantity,
                      item.description,
                      item.id
                    )
                  }
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    props.updateItem(
                      item.name,
                      e.target.value,
                      item.description,
                      item.id
                    )
                  }
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.description}
                  onChange={(e) =>
                    props.updateItem(
                      item.name,
                      item.quantity,
                      e.target.value,
                      item.id
                    )
                  }
                ></input>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={(e) => props.deleteItem(item.id)}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
