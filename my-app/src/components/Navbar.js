import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import "./Header.css";
import { IconContext } from "react-icons";
import axios from "axios";
import ProductList from "./ProductList";
import logo2 from "./img/logo2.png";
import { navigate } from "@reach/router";

export let searchText = "";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [linkText, setlinkText] = useState("");
  //const pageRe = () => {};
  const handleChagne = (e) => {
    //if (e.keyCode === 13) {
    // 엔터키가 눌리면
    searchText = e.target.value;
    setlinkText(escape(searchText));
    //e.target.value = "";

    //navigate("/products/?pagetitle=" + escape(searchText));
    // navigate("/products");
    //document.location.reload();
    //}
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="contents">
            <div>
              <Link to="/">
                <img src={logo2} width="170px" height="80px" alt="logo2"></img>
              </Link>
            </div>
            <div style={{ height: "100px" }}></div>
            <div style={{ height: "60px" }}></div>
            <table className={"table"}>
              <tr>
                <td>
                  <input
                    type={"text"}
                    className={"input-sm"}
                    size={"100"}
                    height={"50"}
                    onChange={handleChagne}
                  />
                </td>
              </tr>
            </table>
            <nav className="navigation">
              <ul>
                <Link to={"/products/?pagetitle=" + linkText}>
                  <li>검색</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={{
                      pathname: item.path,
                      state: {
                        name: item.title,
                      },
                    }}
                  >
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
