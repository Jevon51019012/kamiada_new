import React, { useEffect, useState } from "react";
import { Card } from "../../../bases/Card/Card";
import { fetchDataWithJWT } from "../../../COnfig/Net_conn";

export const UserMenuView = () => {
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataWithJWT();
        setCardsData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setCardsData([]);
      }
    };

    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Get current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-screen-xl mx-auto py-10 mt-10">
        <div className="mt-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {currentCards.map((card) => (
            <Card
              id_jasa={card.id}
              key={card.id}
              source={card.image_url}
              title={card.title}
              description={card.description}
              price={card.price}
              category={card.category}
              location={card.location}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
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
        )}
      </section>
    </div>
  );
};
