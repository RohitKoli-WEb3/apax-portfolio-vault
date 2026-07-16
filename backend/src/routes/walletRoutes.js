import express from "express";

import { getWallet } from "../controllers/walletController.js";

import {
    approveHolderController,
    revokeHolderController,
    transferController,
    approvedController
} from "../controllers/walletBlockchainController.js";

const router = express.Router();

// Wallet Details
router.get("/", getWallet);

// Blockchain
router.post("/approve-holder", approveHolderController);

router.post("/revoke-holder", revokeHolderController);

router.post("/transfer", transferController);

router.get("/approved/:address", approvedController);

export default router;