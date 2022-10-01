const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.log(`Port is running at port ${port}`)
);

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((connection) => console.log("Successful connection"));
