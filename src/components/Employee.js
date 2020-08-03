import React, { Component } from "react";
import API from "../utils/API";
// import employeeArray from "../utils/GenerateEmployees"

// console.log(employeeArray)

// class Employee extends Component {
//   componentDidMount() {
//     this.generateEmployee();
//   }

//   state = {
//     name: {
//       first: "",
//       last: "",
//     },
//   };

//   generateEmployee() {
//     API.getRandomEmployee().then((res) => {
//       this.setState(res.data.results[0]);
//     });
//   }

//   render() {
  const Employee = (props) => {
    return (
      <tr>
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
