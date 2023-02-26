import React, { useEffect, useState } from "react";

import bag from "@resources/img/bag.svg";
import logo from "@resources/img/logo.svg";
import user from "@resources/img/user.svg";
import { Link, useLocation } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const [activeNav, setActiveNav] = useState(pathname);

  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  return (
    <div className={style.headerBorder}>
      <div className={style.header}>
        <div className={style.header__company}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={style.header__navigate}>
          <Link to={"/"}>
            <p
              className={
                pathname === "/" || pathname.includes("/products")
                  ? style.header__navigate__paragraph__active
                  : style.header__navigate__paragraph
              }
            >
              Products
            </p>
          </Link>
          <Link to={"/categories"}>
            <p
              className={
                pathname === "/categories"
                  ? style.header__navigate__paragraph__active
                  : style.header__navigate__paragraph
              }
            >
              Categories
            </p>
          </Link>
          <Link to={"/info"}>
            <p
              className={
                pathname === "/info"
                  ? style.header__navigate__paragraph__active
                  : style.header__navigate__paragraph
              }
            >
              About Us
            </p>
          </Link>
        </div>
        <div className={style.header__logos}>
          <img src={bag} alt="bag" />
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
