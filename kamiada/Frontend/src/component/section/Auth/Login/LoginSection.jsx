import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../Assets/logo.png.png";
import { toast } from "react-toastify";
import { IsLogin } from "../../../COnfig/Net_conn";
import Cookies from "js-cookie";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Pastikan useNavigate dipakai

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { role } = await IsLogin({ email, password });

      if (role !== "buyer") {
        toast.error("Hanya buyer yang bisa login!");
        Cookies.remove("token"); // Hapus token jika bukan buyer
        Cookies.remove("role");
        return;
      }

      toast.success("Login berhasil!");
      navigate("/"); // Arahkan ke halaman jasa jika login sukses
    } catch (error) {
      toast.error(error.message || "Terjadi kesalahan saat login.");
    }
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
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
            required
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
            required
          />

          <button
            type="submit"
            className="bg-red-600 text-white rounded-lg w-full p-2 hover:bg-red-700"
          >
            Masuk
          </button>
        </form>
        <p className="text-center mt-4">
          Belum Punya Akun?{" "}
          <Link to="/register" className="text-red-600 font-semibold">
            Klik Disini!
          </Link>
        </p>
      </div>
    </div>
  );
};
