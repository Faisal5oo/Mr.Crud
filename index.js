const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserByID,
} = require("./crudOperations");
const { users } = require("./db");

// Get all users
// const users = getAllUsers();
// console.log("🚀 ~ file: index.js:4 ~ users:", users);

// Create user

// const createNewUser = createUser({
//   name: "Faisal",
//   age: 21,
//   address: { house: "630", street: "Karim block", city: "Lahore" },
// });
// console.log(createNewUser);
// console.log(users);

// update user

// const updation = updateUser(2, { name: "feroz", age: 24 });
// console.log("🚀 ~ file: index.js:21 ~ updation:", updation);

// console.log(users);

//
// getUserByID(7);

// delete user

// deleteUser(3);
// console.log(users);

const allUsers = getAllUsers();
console.log("🚀 ~ file: index.js:40 ~ allUsers:", allUsers);
// getUserByID(2);
