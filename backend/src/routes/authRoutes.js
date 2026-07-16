import express from "express";
import { login, connectWallet } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);

router.post("/wallet", connectWallet);

export default router;