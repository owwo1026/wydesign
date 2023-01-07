import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo/logo_c_5.png";
import "../../assets/js/main.js";
import "animate.css";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import $ from "jquery";

export default () => {
  function miniMenuClick(e) {
    e.stopPropagation();
    $("#myDropdown").toggle();
  }
  function menuClick(e) {
    e.stopPropagation();
  }
  $(document).click(function () {
    $("#myDropdown").hide();
  });
  return (
    <header id="header" className="header">
      <div className="mask">
        <div className="headerTop header-sticky not-sticky animate__animated animate__fadeInDown">
          <div className="logo">
            <a role="button" href="/">
              <img id="headerLogo" src={logo} alt="維域設計室內裝修有限公司" />
            </a>
          </div>
          <div className="miniMenu">
            <a className="dropbtn" href="#" onClick={(e) => miniMenuClick(e)}>
              <MenuOutlined style={{ fontSize: "30px", color: "#FFFFFF" }} />
            </a>
            <div className="dropdown-content" id="myDropdown">
              <a href="/about" onClick={(e) => menuClick(e)}>
                <span>Home</span>
                <p>關於維域</p>
              </a>
              <a href="/portfolio" onClick={(e) => menuClick(e)}>
                <span>PORTFOLIO</span>
                <p>作品集</p>
              </a>
              <a href="/contact" onClick={(e) => menuClick(e)}>
                <span>Home</span>
                <p>聯絡我們</p>
              </a>
            </div>
          </div>
          <nav className="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" role="button" href="/about">
                  <span>關於維域</span>
                  <p>ABOUT</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" href="/portfolio">
                  <span>作品集</span>
                  <p>PORTFOLIO</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" href="/contact">
                  <span>聯絡我們</span>
                  <p>CONTACT</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
