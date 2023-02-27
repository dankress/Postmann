import express from "express";
import bodyParser from "body-parser";
import router from "./routes/shipmentsRoutes.js";
import router2 from "./routes/packagestationsRoutes.js";
import router3 from "./routes/usersRoutes.js";
import mongoose from "mongoose";
import swaggerDocs from "../swaggerDocs.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/shipments", router);
app.use("/packagestations", router2);
app.use("/users", router3);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


