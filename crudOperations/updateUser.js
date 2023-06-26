const { users } = require("../db");
const { readFileSync } = require("fs");

module.exports = (id, data) => {
  const findByID = users.find((item) => item.id === id);
  if (findByID) {
    findByID.name = data.name;
    findByID.age = data.age;
    findByID.address = data.address;
  } else {
    console.log("User Not Found");
  }

  return findByID;
};
