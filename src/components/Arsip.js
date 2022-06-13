import React from "react";
import styles from "../styles/CatatanAktif.module.css";
import { showFormattedDate } from "../utils";

const Arsip = (props) => {
  const getData = props.onSendCatatan.filter((a) => a.archived);

  const hapusCatatan = (id) => {
    const catatanSetelahDihapus = props.onSendCatatan.filter((a) => a.id !== id);
    props.onUpdateCatatan(catatanSetelahDihapus);
  };

  const aktifkanCatatan = (id) => {
    const selectData = getData.filter((a) => a.id === id);
    const archivedFalse = { ...selectData[0], archived: false };
    const filterData = props.onSendCatatan.filter((a) => a.id !== id);
    const catatanSetelahDiaktifkan = [...filterData, archivedFalse];
    // console.log(archivedFalse);
    // console.log(catatanSetelahDiaktifkan);
    props.onUpdateCatatan(catatanSetelahDiaktifkan);
  };

  return (
    <div className={styles.container}>
      <h2>Arsip Catatan</h2>

      { props.searchTerm === "" ? 
          (getData.length === 0 ? <p className={styles.notfound}>Data Tidak Ditemukan...</p> : getData.map((a) => (
            <article className={styles.card} key={a.id}>
              <h3>{a.title}</h3>
              <h6>{showFormattedDate(a.createdAt)}</h6>
              <p>{a.body}</p>
              <div className={styles.btn}>
                <button onClick={() => hapusCatatan(a.id)}>Hapus</button>
                <button onClick={() => aktifkanCatatan(a.id)}>Aktifkan</button>
              </div>
            </article>
          ))) : 
          (getData.filter(a => a.title.toLowerCase().includes(props.searchTerm.toLowerCase())).length === 0 ? <p className={styles.notfound}>Data Tidak Ditemukan...</p> : getData.filter(a => a.title.toLowerCase().includes(props.searchTerm.toLowerCase())).map((a) => (
            <article className={styles.card} key={a.id}>
              <h3>{a.title}</h3>
              <h6>{showFormattedDate(a.createdAt)}</h6>
              <p>{a.body}</p>
              <div className={styles.btn}>
                <button onClick={() => hapusCatatan(a.id)}>Hapus</button>
                <button onClick={() => aktifkanCatatan(a.id)}>Aktifkan</button>
              </div>
            </article>
          )))
      }
    </div>
  );
};

export default Arsip;
