import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png.png";
import { AiOutlineClose } from "react-icons/ai";
import { IsRegister } from "../../../COnfig/Net_conn";

export const RegisterSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    IsRegister({ username, email, password });
  };

  return (
    <div className="bg-red-800 flex items-center justify-center min-h-screen">
      <div className="bg-yellow-50 rounded-lg shadow-lg p-8 w-auto relative">
        {/* Close Button */}
        <Link className="absolute top-4 left-4" type="button" to="/">
          <AiOutlineClose className="w-6 h-6 text-black" />
        </Link>

        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
          />

          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
          />

          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder=".........."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
          />

          <label className="block mb-2" htmlFor="confirm-password">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder=".........."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
          />

          <button
            type="submit"
            className="bg-red-600 text-white rounded-lg w-full p-2 hover:bg-red-700"
          >
            Daftar
          </button>
        </form>
        <p className="text-center mt-4">
          Sudah Punya Akun?{" "}
          <Link to="/login" className="text-red-600 font-semibold">
            Klik Disini!
          </Link>
        </p>
      </div>
    </div>
  );
};
