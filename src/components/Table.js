import React, { Component } from "react";
import Employee from "./Employee";
import API from "../utils/API";
import "./TableStyle.css";

let baseArray = [];

class Table extends Component {
  componentDidMount() {
    this.generateEmployees();
  }

  state = {
    employees: [],
    sortAsc: true,
  };

  generateEmployees() {
    API.getRandomEmployee().then((res) => {
      baseArray = res.data.results;
      baseArray.forEach((item, i) => {
        item.id = i + 1;
      });
      this.setState({ employees: baseArray });
    });
  }

  sortEmployeesId() {
    if (this.state.sortAsc) {
      let newArray = this.state.employees.sort((a, b) =>
        a.id >= b.id ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: false,
      });
    } else {
      let newArray = this.state.employees.sort((a, b) =>
        a.id <= b.id ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: true,
      });
    }
  }

  sortEmployeesFirst() {
    if (this.state.sortAsc) {
      let newArray = this.state.employees.sort((a, b) =>
        a.name.first >= b.name.first ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: false,
      });
    } else {
      let newArray = this.state.employees.sort((a, b) =>
        a.name.first <= b.name.first ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: true,
      });
    }
  }

  sortEmployeesLast() {
    if (this.state.sortAsc) {
      let newArray = this.state.employees.sort((a, b) =>
        a.name.last >= b.name.last ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: false,
      });
    } else {
      let newArray = this.state.employees.sort((a, b) =>
        a.name.last <= b.name.last ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: true,
      });
    }
  }

  sortEmployeesAge() {
    if (this.state.sortAsc) {
      let newArray = this.state.employees.sort((a, b) =>
        a.dob.age >= b.dob.age ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: false,
      });
    } else {
      let newArray = this.state.employees.sort((a, b) =>
        a.dob.age <= b.dob.age ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: true,
      });
    }
  }

  sortEmployeesState() {
    if (this.state.sortAsc) {
      let newArray = this.state.employees.sort((a, b) =>
        a.location.state >= b.location.state ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: false,
      });
    } else {
      let newArray = this.state.employees.sort((a, b) =>
        a.location.state <= b.location.state ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: true,
      });
    }
  }

  sortEmployeesZip() {
    if (this.state.sortAsc) {
      let newArray = this.state.employees.sort((a, b) =>
        a.location.postcode >= b.location.postcode ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: false,
      });
    } else {
      let newArray = this.state.employees.sort((a, b) =>
        a.location.postcode <= b.location.postcode ? 1 : -1
      );
      this.setState({
        employees: newArray,
        sortAsc: true,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let searchParam = event.target.search.value.toLowerCase();
    if (searchParam === "") {
      this.handleReset();
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

  handleReset = (event) => {
    event.preventDefault();
    this.setState({ employees: baseArray });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            
            <form id="searchBar" onSubmit={this.handleSubmit}>
              <input
                className="form"
                type="text"
                name="search"
                placeholder="Search by name"
              />
              <button type="button" className="btn btn-dark">
                Search
              </button>
              <button
              onClick={this.handleReset}
              type="button"
              className="btn btn-dark"
            >
              Reset
            </button>
            </form>
            
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesId();
                }}
              >
                ID
              </th>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesFirst();
                }}
              >
                First
              </th>
              <th
                className="canClick"
                onClick={() => {
                  this.sortEmployeesLast();
                }}
              >
                Last
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
                id={employee.id}
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
