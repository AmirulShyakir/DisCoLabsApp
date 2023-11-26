import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";
import logo from "../components/logo.png"

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
          <img src={logo} alt="DisCoLabs" style={{height: 50}}/>
        </div>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
