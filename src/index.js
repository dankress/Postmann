import express from "express";
import bodyParser from "body-parser";
import router from "./shipmentsRoutes.js";
import router from "./packagestationsRoutes.js";


const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/shipments", router);
app.use("/packagestation", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

