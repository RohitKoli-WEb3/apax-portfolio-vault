import "./WalletAssets.css";

function WalletAssets(){

const assets=[
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
];

return(

<div className="wallet-assets">

<h2>Wallet Assets</h2>

<div className="asset-grid">

{assets.map((item,index)=>(

<div className="asset-card" key={index}>

<h3>{item.asset}</h3>

<p>{item.quantity}</p>

<h2>{item.value}</h2>

</div>

))}

</div>

</div>

);

}

export default WalletAssets;