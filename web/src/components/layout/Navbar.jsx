import "./Navbar.css";

import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

function Navbar(){

const user="Rutuja";

return(
<header className="navbar">

<div className="welcome">

<h1>Welcome Back, {user}</h1>

<p>Track, manage and grow your tokenized asset portfolio</p>

</div>


<div className="nav-actions">

<div className="search-box">

<FaSearch/>

<input placeholder="Search assets..." />

</div>


<button className="notification">

<FaBell/>

<span></span>

</button>


<div className="profile">

<FaUserCircle/>

<div>

<h4>{user}</h4>

<p>Investor</p>

</div>

</div>


</div>

</header>
);

}

export default Navbar;