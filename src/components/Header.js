import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <h1 className={styles.logo}>
          <NavLink to="/Ranek/" end>
            Ranek
          </NavLink>
        </h1>
        <nav className={styles.navbar}>
          <NavLink activeClassName={styles.active} to="/Ranek/produtos">
            Produtos
          </NavLink>
          <NavLink activeClassName={styles.active} to="/Ranek/contato">
            Contato
          </NavLink>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
