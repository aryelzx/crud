import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user/user.controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/create-user", createUser);
router.put("/edit-user:id", updateUser);
router.delete("/delete-users/:id", deleteUser);

export default router;
