import React from "react";
import {Link} from "react-router";
export const Header =(props)=>{
  return {
    <nav className="navbar  navbar-defult">
    <div className="container">
    <div className="navbar-header">
      <ul className="nav navbar-nav">
      <li><Link to={"/home"}">Home</Link></li>
      <li><Link to={"/Login"}">Login</Link></li>
</ul>
</div>
</div>
</nav
};
};
//export default header;
