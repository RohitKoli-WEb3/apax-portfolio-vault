export const getWalletData=async()=>{

return{

balance:"$1,248,750",

network:"Ethereum",

status:"Verified",

address:"0xA71F...91BC",

assets:[
{
asset:"Gold (XAU)",
quantity:"10.25 XAU",
value:"$24,850"
},
{
asset:"Silver (XAG)",
quantity:"50 XAG",
value:"$1,567"
},
{
asset:"Platinum (XPT)",
quantity:"2.50 XPT",
value:"$2,345"
}
],

activity:[
{
type:"Deposit",
asset:"Gold",
date:"Today",
status:"Completed"
},
{
type:"Transfer",
asset:"Silver",
date:"Yesterday",
status:"Completed"
},
{
type:"Withdrawal",
asset:"Platinum",
date:"25 Jun",
status:"Pending"
}
]

};

};