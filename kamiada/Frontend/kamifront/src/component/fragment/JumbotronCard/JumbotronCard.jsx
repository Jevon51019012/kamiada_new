import React from "react";
import logo from "../../Assets/logo.png.png"; // Pastikan path logo benar

export const JumbotronCard = () => {
  return (
    <section className="flex-grow flex items-center justify-center">
      <div className="border rounded-lg bg-yellow-50 p-5 text-center">
        <img src={logo} alt="Logo" className="mb-4" />
        <h1 className="text-3xl font-bold">KAMI ADA</h1>
        <p className="text-lg">Mempermudah Mencari Jasa</p>
      </div>
    </section>
  );
};
