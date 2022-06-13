import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BuatCatatan from "./components/BuatCatatan";
import CatatanAktiv from "./components/CatatanAktiv";
import { getInitialData } from "./utils";
import Arsip from "./components/Arsip";

const App = () => {
  const [getData, setGetData] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState('')

  const addCatatan = (newCatatan) => {
    setGetData((prevGetData) => {
      return [newCatatan, ...prevGetData];
    });
  };

  const updateCatatan = (updateCatatan) => {
    setGetData(updateCatatan);
  };

  const searchInput = (search) => {
      setSearchTerm(search)
  }

  return (
    <>
      <Navbar onSearch={searchInput}/>
      <BuatCatatan onAddCatatan={addCatatan} />
      <CatatanAktiv onSendCatatan={getData} onUpdateCatatan={updateCatatan} searchTerm={searchTerm} />
      <Arsip onSendCatatan={getData} onUpdateCatatan={updateCatatan} searchTerm={searchTerm}/>
    </>
  );
};

export default App;
