module.exports = (app) => {
  var router = require("express").Router();
  const { getCartData } = require("../controllers/cart");

  router.get("/", async (req, res) => {
    await getCartData(req, res);
  });

  app.use("/.netlify/functions/app", router);
};
