import React, { useState } from "react";
import JasaSearch from "../../../section/user/Menu/UserSearchView";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import axios from "axios";

export const ViewUserPage = () => {
  const [query, setQuery] = useState("");
  const [jasaList, setJasaList] = useState([]);
  const [error, setError] = useState("");

  const searchJasa = async () => {
    if (!query.trim()) {
      return alert("Masukkan kata kunci pencarian!");
    }

    try {
      const response = await axios.get(
        `https://backend-production-c259.up.railway.app/jasa/search?q=${query.trim()}`
      );
      const jasaData = response.data.data;

      if (jasaData.length === 0) {
        setJasaList([]);
        setError("Tidak ada jasa ditemukan.");
      } else {
        setJasaList(jasaData);
        setError("");
      }
    } catch (err) {
      setError("Gagal mengambil data jasa!");
    }
  };

  return (
    <div>
      <NavbarUser>
        <JasaSearch
          query={query}
          setQuery={setQuery}
          jasaList={jasaList}
          error={error}
          searchJasa={searchJasa}
        />
      </NavbarUser>
    </div>
  );
};
