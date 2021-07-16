const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
routes.initRoutes(app);

try {
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
} catch (err) {
  console.log(err);
}
