export const loginService = async (email, password) => {

  if (!email || !password) {
    return {
      success: false,
      message: "Email and Password are required",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Invalid Email Format",
    };
  }

  // Password validation
  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters",
    };
  }

  return {
    success: true,
    message: "Login Successful",
    user: {
      id: Date.now(),
      name: email.split("@")[0],
      email,
    },
  };
};

export const connectWalletService = async (walletAddress) => {

  return {
    success: true,
    message: "Wallet Connected Successfully",
    walletAddress,
  };

};