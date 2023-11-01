import express from "express";
import { createUser, getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/create-user", createUser);

export default router;
