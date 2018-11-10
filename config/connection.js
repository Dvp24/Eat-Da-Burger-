// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xfn8u81tva3xubmr",
  password: "h6c806k9ioypna8l",
  database: "k6n8boo2sbzvlr9h"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
