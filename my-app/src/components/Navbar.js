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

export let searchText = "";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  //const pageRe = () => {};
  const handleChagne = (e) => {
    if (e.keyCode === 13) {
      // 엔터키가 눌리면
      searchText = e.target.value;
      alert(searchText);
      e.target.value = "";
      localStorage.setItem("키", searchText);
      if (searchText.includes("텐트")) {
        //document.location.href="/tent"
      }
      document.location.href = "/products";
    }
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
              <img src={logo2} width="170px" height="80px" alt="logo2"></img>
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
                    onKeyDown={handleChagne}
                  />
                </td>
              </tr>
            </table>
            <nav className="navigation">
              <ul>
                <Link to="/login">
                  <li>로그인</li>
                </Link>

                <li>최근 본 상품</li>
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
