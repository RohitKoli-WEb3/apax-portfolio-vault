import express from "express";

import {
  getDashboard,
  getPortfolioChart,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", getDashboard);

router.get("/chart", getPortfolioChart);

export default router;