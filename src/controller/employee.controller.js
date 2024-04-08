const db = require("../config/db");

const getAll = (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      status: "success",
      data: result,
    });
  });
};

const getOne = (req, res) => {
  db.query(
    `SELECT * FROM employees WHERE employee_id = ${req.params.id}`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        status: "success",
        data: result,
      });
    }
  );
};

const create = (req, res) => {
  const {
    firstname,
    lastname,
    tel,
    email,
    base_salary,
    address,
    province,
    country,
  } = req.body;
  db.query(
    `INSERT INTO employees (firstname, lastname, tel, email,base_salary, address, province, country) VALUES ('${firstname}', '${lastname}', '${tel}', '${email}', '${base_salary}', '${address}', '${province}', '${country}')`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        status: "success",
        message: "Employee added successfully",
      });
    }
  );
};

const update = (req, res) => {
  const {
    firstname,
    lastname,
    tel,
    email,
    base_salary,
    address,
    province,
    country,
  } = req.body;
  db.query(
    `UPDATE employees SET firstname = '${firstname}', lastname = '${lastname}', tel = '${tel}', email = '${email}', base_salary = '${base_salary}', address = '${address}', province = '${province}', country = '${country}' WHERE employee_id = ${req.params.id}`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        status: "success",
        message: "Employee updated successfully",
      });
    }
  );
};

const remove = (req, res) => {
  db.query(
    `DELETE FROM employees WHERE employee_id = ${req.params.id}`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        status: "success",
        message: "Employee deleted successfully",
      });
    }
  );
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
