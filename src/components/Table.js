import React, { Component } from "react";
import Employee from "./Employee";
import API from "../utils/API";
import "./TableStyle.css";
import EmployeeArray from "../utils/GenerateEmployees";

class Table extends Component {
  // sortTable(n) {
  //   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  //   table = document.getElementById('table');
  //   switching = true;
  //   // Set the sorting direction to ascending:
  //   dir = "asc";
  //   /* Make a loop that will continue until
  //   no switching has been done: */
  //   while (switching) {
  //     // Start by saying: no switching is done:
  //     switching = false;
  //     rows = table.rows;
  //     /* Loop through all table rows (except the
  //     first, which contains table headers): */
  //     for (i = 1; i < (rows.length - 1); i++) {
  //       // Start by saying there should be no switching:
  //       shouldSwitch = false;
  //       /* Get the two elements you want to compare,
  //       one from current row and one from the next: */
  //       x = rows[i].getElementsByTagName("TD")[n];
  //       y = rows[i + 1].getElementsByTagName("TD")[n];
  //       /* Check if the two rows should switch place,
  //       based on the direction, asc or desc: */
  //       if (dir === "asc") {
  //         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  //           // If so, mark as a switch and break the loop:
  //           shouldSwitch = true;
  //           break;
  //         }
  //       } else if (dir === "desc") {
  //         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
  //           // If so, mark as a switch and break the loop:
  //           shouldSwitch = true;
  //           break;
  //         }
  //       }
  //     }
  //     if (shouldSwitch) {
  //       /* If a switch has been marked, make the switch
  //       and mark that a switch has been done: */
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //       // Each time a switch is done, increase this count by 1:
  //       switchcount ++;
  //     } else {
  //       /* If no switching has been done AND the direction is "asc",
  //       set the direction to "desc" and run the while loop again. */
  //       if (switchcount === 0 && dir === "asc") {
  //         dir = "desc";
  //         switching = true;
  //       }
  //     }
  //   }
  // }

  componentDidMount() {
    this.generateEmployee();
    this.sortEmployees();
  }

  state = {
    employees: [],
  };

  generateEmployee() {
    API.getRandomEmployee().then((res) => {
      this.setState({ employees: res.data.results });
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
