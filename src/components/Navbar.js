import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = (props) => {
  const searchChange = (e) => {
    props.onSearch(e.target.value);
  }
  return (
    <nav className={styles.container}>
      <h1>Dicoding Personal Notes</h1>
      <input type="text" placeholder="Cari Berdasarkan Judul..." onChange={searchChange}/>
    </nav>
  );
};

export default Navbar;
