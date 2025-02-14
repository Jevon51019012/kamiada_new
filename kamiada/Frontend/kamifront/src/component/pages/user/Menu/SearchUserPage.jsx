import React, { useState } from "react";
import UserSearchView from "../../../section/user/Menu/UserSearchView";
import { searchData } from "../../../COnfig/Net_conn";

export const SearchUserPage = () => {
  const [query, setQuery] = useState("");
  const [jasaList, setJasaList] = useState([]);
  const [error, setError] = useState("");

  const searchJasa = async () => {
    try {
      const jasaData = await searchData(query);
      if (jasaData.length === 0) {
        setJasaList([]);
        setError("Tidak ada jasa ditemukan.");
      } else {
        setJasaList(jasaData);
        setError("");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <UserSearchView
      query={query}
      setQuery={setQuery}
      jasaList={jasaList}
      error={error}
      searchJasa={searchJasa}
    />
  );
};
