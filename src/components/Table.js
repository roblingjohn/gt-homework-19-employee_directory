import React, { Component } from "react";
import Employee from "./Employee";
import API from "../utils/API";
import "./TableStyle.css";
import EmployeeArray from "../utils/GenerateEmployees";
import SearchBar from "./SearchBar";

let baseArray = [];

class Table extends Component {
  componentDidMount() {
    this.generateEmployees();
  }

  state = {
    employees: [],
  };

  generateEmployees() {
    API.getRandomEmployee().then((res) => {
      baseArray = res.data.results;
      this.setState({ employees: baseArray });
    });
  }

  sortEmployeesFirst() {
    let newArray = this.state.employees.sort((a, b) =>
      a.name.first >= b.name.first ? 1 : -1
    );
    this.setState({ employees: newArray });
  }

  sortEmployeesLast() {
    let newArray = this.state.employees.sort((a, b) =>
      a.name.last >= b.name.last ? 1 : -1
    );
    this.setState({ employees: newArray });
  }

  sortEmployeesAge() {
    let newArray = this.state.employees.sort((a, b) =>
      a.dob.age >= b.dob.age ? 1 : -1
    );
    this.setState({ employees: newArray });
  }

  sortEmployeesState() {
    let newArray = this.state.employees.sort((a, b) =>
      a.location.state >= b.location.state ? 1 : -1
    );
    this.setState({ employees: newArray });
  }

  sortEmployeesZip() {
    let newArray = this.state.employees.sort((a, b) =>
      a.location.postcode >= b.location.postcode ? 1 : -1
    );
    this.setState({ employees: newArray });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let searchParam = event.target.search.value.toLowerCase();
    if (searchParam.length === 0) {
      this.setState({ employees: baseArray });
    }
    let searchedArray = baseArray.filter(function (e) {
      return (
        e.name.first.toLowerCase().includes(searchParam) ||
        e.name.last.toLowerCase().includes(searchParam)
      );
    });
    this.setState({ employees: searchedArray });
    event.target.search.value = "";
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ employees: baseArray });
  };

  render() {
    return (
      <div>
        <div>
          <form id="searchBar" onSubmit={this.handleSubmit}>
            <input type="text" name="search" placeholder="Search by name" />
            <button>Search</button>
          </form>
          <button onClick={this.handleClick}>Reset</button>
        </div>
        <table>
          <thead>
            <tr>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesFirst();
                }}
              >
                First Name
              </th>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesLast();
                }}
              >
                Last Name
              </th>
              <th>Email</th>
              <th>Cell number</th>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesAge();
                }}
              >
                Age
              </th>
              <th>Street address</th>
              <th>City</th>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesState();
                }}
              >
                State
              </th>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesZip();
                }}
              >
                Zip
              </th>
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
