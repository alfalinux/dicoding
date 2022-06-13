import React, { useState } from "react";
import styles from "../styles/BuatCatatan.module.css";

const BuatCatatan = (props) => {
  const [judul, setJudul] = useState("");
  const [text, setText] = useState("");

  const catatanSubmitHandler = (e) => {
    e.preventDefault();

    const newCatatan = {
      id: +new Date(),
      title: judul,
      body: text,
      createdAt: new Date(),
      archived: false,
    };
    props.onAddCatatan(newCatatan);
  };

  const judulChangeHandler = (e) => {
    if (e.target.value.length > 50) {
      setJudul(e.target.value.splice(0, 50));
    } else {
      setJudul(e.target.value);
    }
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Buat Catatan Baru</h2>
      <p>Sisa karakter: {50 - judul.length}</p>
      <form onSubmit={catatanSubmitHandler}>
        <input
          type="text"
          placeholder="Tulis Judul Catatan..."
          onChange={judulChangeHandler}
          value={judul}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tulis catatan kamu disini..."
          onChange={textChangeHandler}
        />
        <button>Simpan Catatan</button>
      </form>
    </div>
  );
};

export default BuatCatatan;
