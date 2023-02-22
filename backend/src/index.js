import express from "express";
import bodyParser from "body-parser";
import router from "./routes/shipmentsRoutes.js";
import router2 from "./routes/packagestationsRoutes.js";
import router3 from "./routes/usersRoutes.js";


const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/shipments", router);
app.use("/packagestations", router2);
app.use("/users", router3);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

