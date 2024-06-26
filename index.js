const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", // restrict calls to those this address
  })
);

const PORT = 3001;
app.get("/", (req, res) => {
  res.send("Hello! b sl soy");
});

// import  route
const employee = require("./src/route/employee.route");
const customer = require("./src/route/customer.route");

// use  route
employee(app);
customer(app);

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on port"+ PORT);
});
