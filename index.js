const { getAllUsers } = require("./crudOperations");

// Get all users
const users = getAllUsers();
console.log("🚀 ~ file: index.js:4 ~ users:", users);
