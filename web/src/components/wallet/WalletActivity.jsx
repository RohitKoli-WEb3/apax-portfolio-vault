import "./WalletActivity.css";

function WalletActivity(){

const activity=[
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
];

return(

<div className="wallet-activity">

<h2>Recent Activity</h2>

<div className="activity-list">

{activity.map((item,index)=>(

<div className="activity-item" key={index}>

<div>

<h4>{item.type}</h4>

<p>{item.asset} • {item.date}</p>

</div>

<span
className={
item.status==="Completed"
?"completed"
:"pending"
}
>

{item.status}

</span>

</div>

))}

</div>

</div>

);

}

export default WalletActivity;