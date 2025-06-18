import express from "express";
import { login, register } from "../controllers/auth.js";
// Controllers

const router = express.Router();

// ENDPOINT http://localhost:8000/auth/register
router.post("/register", register);
router.post("/login", login);

// Export
export default router;
