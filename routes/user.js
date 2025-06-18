import express from "express";
// Controllers
import {
  createUser,
  deleteUser,
  listUser,
  readUser,
  updateRoleUser,
} from "../controllers/user.js";
// Middleware
import { authCheck } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/api
router.get("/users", authCheck, listUser);
router.get("/user", readUser);
router.post("/user", createUser);
router.patch("/user/role/:id", updateRoleUser);
router.delete("/user/:id", deleteUser);

// Export
export default router;
