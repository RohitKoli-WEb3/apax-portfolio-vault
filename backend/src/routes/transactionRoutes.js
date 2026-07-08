import express from "express";
import { getTransactionsController } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", getTransactionsController);

export default router;