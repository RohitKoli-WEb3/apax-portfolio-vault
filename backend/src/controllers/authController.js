import {
  loginService,
  connectWalletService,
} from "../services/authService.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const response = await loginService(email, password);

  res.json(response);
};

export const connectWallet = async (req, res) => {
  const { walletAddress } = req.body;

  const response = await connectWalletService(walletAddress);

  res.json(response);
};