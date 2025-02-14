import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { Card } from "../../../bases/Card/Card";
import { searchData } from "../../../COnfig/Net_conn";

const UserSearchView = () => {
  const query = new URLSearchParams(window.location.search).get("q");
  const location = useLocation(); // Untuk mendeteksi perubahan URL
  const [jasaList, setJasaList] = useState([]);
  const [error, setError] = useState(null); // Define the error state

  useEffect(() => {
    if (query) {
      searchData(query)
        .then(setJasaList)
        .catch((err) => {
          console.error(err);
          setError("An error occurred while fetching data."); // Set the error message
        });
    }
    console.log(jasaList);
  }, [query, location]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex-grow p-4">
        <section className="max-w-screen-xl mx-auto py-10 mt-10">
          <div className="container mx-auto p-4">
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error if exists */}
            <div
              id="resultContainer"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {jasaList.length > 0 ? (
                jasaList.map((jasa) => (
                  <Card
                    id_jasa={jasa.id}
                    key={jasa.id}
                    source={jasa.image_url}
                    title={jasa.title}
                    description={jasa.description}
                    price={jasa.price}
                    category={jasa.category}
                    location={jasa.location}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  Tidak ada hasil ditemukan.
                </p>
              )}
            </div>
          </div>

          {/* Pagination Controls */}
          {/* {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 py-1 px-3 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )} */}
        </section>
      </div>
    </div>
  );
};

export default UserSearchView;
