import React from "react";
import styles from "../styles/CatatanAktif.module.css";
import { showFormattedDate } from "../utils";

const CatatanAktiv = (props) => {
  const getData = props.onSendCatatan.filter((a) => !a.archived);

  const hapusCatatan = (id) => {
    const catatanSetelahDihapus = props.onSendCatatan.filter((a) => a.id !== id);
    props.onUpdateCatatan(catatanSetelahDihapus);
  };

  const arsipkanCatatan = (id) => {
    const selectData = getData.filter((a) => a.id === id);
    const archivedTrue = { ...selectData[0], archived: true };
    const filterData = props.onSendCatatan.filter((a) => a.id !== id);
    const catatanSetelahDiarsip = [...filterData, archivedTrue];
    // console.log(archivedTrue);
    // console.log(catatanSetelahDiarsip);
    props.onUpdateCatatan(catatanSetelahDiarsip);
  };
   
  return (
    <div className={styles.container}>
      <h2>Catatan Aktif</h2>

      { props.searchTerm === "" ? 
          (getData.length === 0 ? <p className={styles.notfound}>Data Tidak Ditemukan...</p> : getData.map((a) => (
            <article className={styles.card} key={a.id}>
              <h3>{a.title}</h3>
              <h6>{showFormattedDate(a.createdAt)}</h6>
              <p>{a.body}</p>
              <div className={styles.btn}>
                <button onClick={() => hapusCatatan(a.id)}>Hapus</button>
                <button onClick={() => arsipkanCatatan(a.id)}>Arsipkan</button>
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
                <button onClick={() => arsipkanCatatan(a.id)}>Arsipkan</button>
              </div>
            </article>
          )))
      }
      
    </div>
  )
};

export default CatatanAktiv;
