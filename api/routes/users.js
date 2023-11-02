import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
} from "../controllers/user/user.controller";

const router = express.Router();

router.get("/users", getUsers);
router.post("/create-user", createUser);
router.delete("/users:id", deleteUser);

export default router;
