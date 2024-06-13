import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users/created", createUser);
router.patch("/users/updated/:id", updateUser);
router.delete("/users/deleted/:id", deleteUser);

export default router;
