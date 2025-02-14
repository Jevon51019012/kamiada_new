import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Card = ({ id_jasa, id, source, title, location }) => {
  const navigate = useNavigate();
  const id_j = id_jasa;
  const handleDetailClick = () => {
    navigate(`/jasa/${id_j}`);
  };
  return (
    <div className="max-w-sm bg-transparent rounded-lg shadow-lg overflow-hidden">
      <img
        className="rounded-t-lg h-56 w-full object-cover"
        src={source || "https://via.placeholder.com/400"}
        alt={title || "Gambar tidak tersedia"}
      />
      <div className="p-5">
        {title && (
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        )}
        {location && (
          <p className="flex items-center mb-5 mt-5 font-normal text-gray-700">
            <FaLocationDot className="mr-2 text-red-600" />
            {location}
          </p>
        )}
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 cursor-pointer"
          onClick={handleDetailClick}
        >
          Selengkapnya
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
