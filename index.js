const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
require("./models/db");
require("./models/userModel");
require("./models/productModel");
require("./models/cardModel");
require("./models/brandModel");
require("./models/cardProductModel");

const sequelize = require("./models/sequelize");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cardProductRouter = require("./routes/cardProduct");

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cardProduct", cardProductRouter);

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`app listening at http://localhost:${PORT}`);
});
