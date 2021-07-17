const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const config = require("./config");
const app = express();

app.use(cors());
app.use(express.json());
routes.initRoutes(app);

const port = config.port;

try {
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
} catch (err) {
  console.log(err);
}
