import React, { Component } from "react";
import Employee from "./Employee";
import API from "../utils/API";
import "./TableStyle.css";
import EmployeeArray from "../utils/GenerateEmployees";

let baseArray = []

class Table extends Component {
  componentDidMount() {
    this.generateEmployee();
  }

  state = {
    employees: [],
  };

  generateEmployee() {
    API.getRandomEmployee().then((res) => {
      baseArray = res.data.results
      this.setState({ employees: baseArray });
    });
  }

  sortEmployees() {
    let newArray = this.state.employees.sort((a, b) => (a.name.last >= b.name.last ? 1 : -1));
    this.setState({ employees: newArray });
  }

  render() {
    return (
      <div>
        <button>Sort</button>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th onClick={() => {this.sortEmployees()}}>Last Name</th>
              <th>Email</th>
              <th>Cell number</th>
              <th>Age</th>
              <th>Street address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <Employee
                first={employee.name.first}
                last={employee.name.last}
                email={employee.email}
                cell={employee.cell}
                age={employee.dob.age}
                address={
                  employee.location.street.number +
                  " " +
                  employee.location.street.name
                }
                city={employee.location.city}
                state={employee.location.state}
                zip={employee.location.postcode}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
