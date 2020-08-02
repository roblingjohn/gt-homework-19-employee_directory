import React, { Component } from "react";
import API from "../utils/API";
// import employeeArray from "../utils/GenerateEmployees"

class Employee extends Component {
  componentDidMount() {
    this.generateEmployee();
  }

  state = {
    name: {
      first: "",
      last: "",
    },
  };

  generateEmployee() {
    API.getRandomEmployee().then((res) => {
      this.setState(res.data.results[0]);
    });
  }

  render() {
    return (
      <tr>
        <td>{this.state.name.first}</td>
        <td>{this.state.name.last}</td>
        <td>{this.state.email}</td>
        <td>{this.state.cell}</td>
        {/* <td>{this.state.dob.age}</td> */}
        {/* <td>{this.state.location.city}</td> */}
      </tr>
    );
  }
}

export default Employee;
