const db = require("../config/db");

const getAll = (req, res) => {
  db.query("SELECT * FROM customer", (err, result) => {
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
    `SELECT * FROM customer WHERE customer_id = ${req.params.id}`,
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
    city,
  } = req.body;

  const image = req.file.filename;

  const sqlQuery = `INSERT INTO customer (first_name, last_name, tel, email, address, city, province, country, image)
                  VALUES ('${firstname}', '${lastname}', '${tel}', '${email}', '${address}', '${city}', '${province}', '${country}',  '${image}')`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      status: "success",
      message: "Customer added successfully",
    });
  });
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
    city,
  } = req.body;
  var image = null;

  if (req.file) {
    image = req.file.filename;
  }

  const sqlQuery = `UPDATE customer 
    SET
    first_name = '${firstname}',
    last_name = '${lastname}',
    ${req.file ? `image = '${image}',` : ""}
    tel = '${tel}', 
    email = '${email}', 
    address = '${address}', 
    city = '${city}', 
    province = '${province}', 
    country = '${country}'
    WHERE customer_id = ${req.params.id}`;

  db.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      status: "success",
      message: "Customer updated successfully",
    });
  });
};

const remove = (req, res) => {
  db.query(
    `DELETE FROM customer WHERE customer_id = ${req.params.id}`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        status: "success",
        message: "Customer deleted successfully",
      });
    }
  );
};

const search = (req, res) => {
  db.query(
    `SELECT * FROM customer WHERE first_name LIKE '%${req.params.keyword}%' OR last_name LIKE '%${req.params.keyword}%' OR email LIKE '%${req.params.keyword}%' OR tel LIKE '%${req.params.keyword}%' OR address LIKE '%${req.params.keyword}%' OR city LIKE '%${req.params.keyword}%' OR province LIKE '%${req.params.keyword}%' OR country LIKE '%${req.params.keyword}%'`,
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

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  search,
};
