import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchInput } from "../../bases/SearchInput/SearchInput";
import logo from "../../Assets/logo.png.png";
import profilePic from "../../Assets/profil.jpg";
import Cookies from "js-cookie";

export const NavbarUser = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [email, setUserEmail] = useState("");
  const [role, setUserRole] = useState("");
  const [navemail, setNavemail] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    const role = Cookies.get("role");

    const emailstore = sessionStorage.getItem("email");

    setNavemail(emailstore);
    setIsLoggedIn(!!token);

    if (email) setUserEmail(email);
    if (role) setUserRole(role);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("email");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    window.location.href = "/";
  };

  // Fungsi untuk menangani pencarian
  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/jasa/search?query=${query.trim()}`);
    }
  };

  return (
    <nav className="bg-red-900 fixed w-full z-20 top-0 start-0 pb-2 shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12 -mr-2" alt="Logo" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap hidden md:block">
            Kami Ada
          </span>
        </Link>

        {/* Search Form */}
        <div className="flex-grow md:max-w-lg mx-4">
          <SearchInput />
        </div>

        {/* Profile Button or Login Button */}
        <div className="relative">
          {isLoggedIn ? (
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center focus:outline-none">
                <img
                  src={profilePic}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 w-48 bg-white border rounded-lg shadow-lg p-2">
                  <h4 className="px-4 py-2 text-gray-800 text-center text-lg">
                    {navemail}
                  </h4>
                  <Link to={"/jasa/"}>
                    <button className="mb-1 block w-full text-left px-4 py-2 text-center text-white bg-red-800 hover:bg-red-500 rounded-lg">
                      Menu
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-center text-white bg-red-800 hover:bg-red-500 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
