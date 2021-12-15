import express from "express";
import { initConnection } from "./database/connection";
import routes from "./routes";
import growdeverRoutes from "./router/growdever-routes";

const app = express();
app.use(express.json());
// app.use(routes);

app.use("/db-growdevers", growdeverRoutes);

initConnection()
    .then(() => app.listen(8081, () => console.log("Server iniciou")))
    .catch((error) => {
        console.log("Error at creating connection with database");
        console.log(error);
    });
