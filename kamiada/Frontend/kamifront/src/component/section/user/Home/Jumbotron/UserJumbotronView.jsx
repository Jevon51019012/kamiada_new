import React from "react";
import { JumbotronCard } from "../../../../fragment/JumbotronCard/JumbotronCard";
import logo from "../../../../Assets/logo.png.png"; // Pastikan path logo benar

export const UserJumbotronView = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-800">
      <div className="border rounded-lg bg-yellow-50 p-8  shadow-lg flex flex-col items-center text-center">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="h-80 w-80 mr-2" />
          <div>
            <h1 className="text-4xl font-bold text-red-600">KAMI ADA</h1>
            <p className="text-lg text-gray-700">Mempermudah Mencari Jasa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
