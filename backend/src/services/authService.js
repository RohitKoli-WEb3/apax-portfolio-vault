export const loginService = async (email, password) => {
  if (
    email === "rohit@gmail.com" &&
    password === "123456"
  ) {
    return {
      success: true,
      message: "Login Successful",
      user: {
        id: 1,
        name: "Rohit",
        email,
      },
    };
  }

  return {
    success: false,
    message: "Invalid Email or Password",
  };
};

export const connectWalletService = async (walletAddress) => {
  return {
    success: true,
    message: "Wallet Connected Successfully",
    walletAddress,
  };
};