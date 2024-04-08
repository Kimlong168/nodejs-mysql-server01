const customerController = require("../controller/customer.controller");
const { upload } = require("../config/service");
const customer = (app) => {
  app.get("/api/customer", customerController.getAll);

  app.get("/api/customer/:id", customerController.getOne);

  app.post(
    "/api/customer",
    upload.single("image_upload"),
    customerController.create
  );

  app.put(
    "/api/customer/:id",
    upload.single("image_upload"),
    customerController.update
  );

  app.delete("/api/customer/:id", customerController.remove);
  app.get("/api/customer/search/:keyword", customerController.search);
};

module.exports = customer;
