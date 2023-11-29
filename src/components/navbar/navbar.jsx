import React, { Component } from "react";
import logo from "../../assets/logo.jpg";
import style from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={style.logo}>
        <img src={logo} alt="Logo" />
        <h2>Tienda de productos</h2>
      </div>
      <nav className={style.navigation}>
        <button onClick={() => navigate("/login")} className={style.btnLogin}>
          Iniciar sesion
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
