import express from "express";
import {
  createUser,
  deleteUser,
  editUser,
  findOne,
  getAll,
} from "../controllers/userControllers.js";
const route = express.Router();

//different routes for users
route.post("/create", createUser);
route.get("/getAll", getAll);
route.get("/findOne/:id", findOne);
route.put("/edit/:id", editUser);
route.delete("/delete/:id", deleteUser);

export default route;
