import {useEffect,useState} from "react";
import PageLayout from "../components/layout/PageLayout";
import PortfolioSummary from "../components/portfolio/PortfolioSummary";
import AssetTable from "../components/portfolio/AssetTable";
import {portfolioService} from "../services/portfolioService";

function Portfolio(){

const [summary,setSummary]=useState({});
const [assets,setAssets]=useState([]);

useEffect(()=>{

async function loadPortfolio(){

try{

const data=await portfolioService.getPortfolio();

setSummary(data.summary);
setAssets(data.assets);

}catch(error){

console.error(error);

}

}

loadPortfolio();

},[]);

return(

<PageLayout>

<div className="dashboard">

<h1 style={{color:"white"}}>Portfolio</h1>

<p style={{color:"#94a3b8"}}>
Manage your precious metal assets.
</p>

<PortfolioSummary data={summary}/>

<AssetTable assets={assets}/>

</div>

</PageLayout>

);

}

export default Portfolio;