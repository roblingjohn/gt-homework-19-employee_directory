import React, { Component } from "react";
import API from "../utils/API";

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
      //   employeeName = `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      //   return employeeName
      this.setState(res.data.results[0]);
    });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.name.first} {this.state.name.last}
        </h2>
      </div>
    );
  }
}

export default Employee;
