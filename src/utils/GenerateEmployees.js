import API from "../utils/API";

let EmployeeArray = [];

// function getEmployees() {
//   API.getRandomEmployee();
// }

// getEmployees().then(function(res) {
//   employeeArray.push(res.data.results[0]);
//   if(employeeArray.length<10){
//     getEmployees();
//   }
// })


API.getRandomEmployee().then((res) => {
  EmployeeArray = {res}
  // console.log(res.data.results)
  return EmployeeArray

});

export default EmployeeArray;
