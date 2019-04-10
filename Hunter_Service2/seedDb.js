const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "nike"
});

for (var i = 0; i < 101; i++) {
  connection.query(
    "insert into description(description, benefits, item_headline, shown, style) values (?,?,?,?,?);",
    [
      faker.lorem.paragraph(),
      faker.lorem.paragraph(),
      faker.lorem.words(),
      faker.lorem.words(),
      faker.lorem.words()
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}
