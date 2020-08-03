import React from "react";

  const Employee = (props) => {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.cell}</td>
        <td>{props.age}</td>
        <td>{props.address}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zip}</td>


      </tr>
    );
  }

export default Employee;
