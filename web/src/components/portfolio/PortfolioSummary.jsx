import "./PortfolioSummary.css";
import {FaDollarSign,FaChartPie,FaArrowTrendUp,FaWallet} from "react-icons/fa6";

function PortfolioSummary({data}){

const cards=[
{
title:"Total Portfolio",
value:data.totalValue,
icon:<FaDollarSign/>
},
{
title:"Total Assets",
value:data.totalAssets,
icon:<FaChartPie/>
},
{
title:"Best Performer",
value:data.bestPerformer,
icon:<FaArrowTrendUp/>
},
{
title:"Wallet Status",
value:data.walletStatus,
icon:<FaWallet/>
}
];

return(

<div className="portfolio-summary">

{cards.map((card,index)=>(

<div className="summary-card" key={index}>

<div className="summary-icon">

{card.icon}

</div>

<h4>{card.title}</h4>

<h2>{card.value}</h2>

</div>

))}

</div>

);

}

export default PortfolioSummary;