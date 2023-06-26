const { readFile } = require("fs");

module.exports = () => {
  try {
    readFile("./db.json", "utf8", (err, data) => {
      if (err) throw err;
      const { users } = JSON.parse(data);
      return users;
    });
  } catch (error) {
    return error;
  }
};
