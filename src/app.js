import express from "express";
import routes from "./routes/index.route.js";
import bodyParser from "body-parser";

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/', routes)

app.listen(port, () => {
    console.log(`Profile Plus Runing on Port ${port}`);
});