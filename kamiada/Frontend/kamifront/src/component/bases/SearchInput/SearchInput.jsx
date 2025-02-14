import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        navigate(`/jasa/search?q=${query.trim()}`);
        setQuery(""); // Clear the input after search
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="flex-grow max-w-lg mx-auto">
      <div className="flex">
        <div className="relative w-full">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan kata kunci pencarian"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};
