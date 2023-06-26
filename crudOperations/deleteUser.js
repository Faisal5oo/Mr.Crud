const { users } = require("../db");

module.exports = (id) => {
  const idToDelete = id;
  const userID = users.find((item) => item.id === idToDelete);
  if (userID !== -1) {
    users.splice(userID, idToDelete);
    return userID;
  }
};
