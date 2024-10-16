import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongodbConnection from "./database/mongoDb_AndServer_connection.js";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/userRoutes.js";

const app = express();
const uri = process.env.MONGODB_ATLAS_URI;
const port = process.env.PORT || 5000;

//using middlewares
app.use(bodyParser.json());
app.use(cors());

// connection mongodb and starting server on 3000 || 5000;
mongodbConnection(uri, app, port);

//using api routes for CRUD operations
app.use("/api", route);
