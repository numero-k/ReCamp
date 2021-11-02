import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="contents">
        <div>로고 자리</div>
        <nav className="navigation">
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
