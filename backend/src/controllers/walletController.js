import {getWalletData} from "../services/walletService.js";

export const getWallet=async(req,res)=>{

const data=await getWalletData();

res.json(data);

};