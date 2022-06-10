import React from "react";

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
                    onChange={props.editName}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={props.editQuantity}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={item.description}
                    onChange={props.editDescription}
                  ></input>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
