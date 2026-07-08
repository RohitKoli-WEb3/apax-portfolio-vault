import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import marketRoutes from "./routes/marketRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/wallet", walletRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "APAX Backend Running",
  });
});

export default app;