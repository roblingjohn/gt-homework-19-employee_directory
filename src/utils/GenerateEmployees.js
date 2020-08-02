import API from "../utils/API";

const employeeArray = [];

API.getRandomEmployee().then((res) => {
  employeeArray.push(res);
});

export default employeeArray;
