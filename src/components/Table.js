import React, { Component } from "react";
import Employee from "./Employee";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Cell number</th> 
            <th>Age</th>
            <th>Street address</th>
          </tr>
        </thead>
        <tbody>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </tbody>
      </table>
    );
  }
}

export default Table;
