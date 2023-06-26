const { readFile } = require("fs");

module.exports = (id) => {
  try {
    readFile("./db.json", "utf8", (err, data) => {
      if (err) throw err;
      const { users } = JSON.parse(data);
      const isUser = users.find((item) => item.id === id);
      if (!isUser) return "user not found";
      return isUser;
    });
  } catch (error) {
    return error;
  }
  //   const userID = users.find((item) => item.id === id);
  //   if (userID) {
  //     console.log(userID);
  //   } else {
  //     console.log("User not Found");
  //   }
  //   return userID;
};
