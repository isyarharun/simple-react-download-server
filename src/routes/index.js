const { router } = require("../controllers/routers");
module.exports = {
  initRoutes(app) {
    app.use("/api", router);
  },
};
