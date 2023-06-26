const { users } = require("../db");

module.exports = (data) => {
  users.name = "John";
  console.log("🚀 ~ file: createUser.js:5 ~ users:", users);
  // const newData = new Object();
  // newData.id = users.length + 1;
  // newData.name = data.name;
  // newData.age = data.age;
  // newData.address = data.address;
  // const pushed = users.push(newData);
  // return pushed, newData;
};
