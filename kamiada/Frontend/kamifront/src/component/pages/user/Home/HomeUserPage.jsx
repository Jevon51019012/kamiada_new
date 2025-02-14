import React from "react";
import { UserHomeView } from "../../../section/user/Home/UserHomeView";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { UserJumbotronView } from "../../../section/user/Home/Jumbotron/UserJumbotronView";
import logo from "../../../Assets/logo.png.png";

export const HomeUserPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />
      <div className="flex items-center justify-center min-h-screen bg-red-800 p-4">
        <div className="rounded-3xl bg-yellow-50 p-6 sm:p-10 shadow-lg flex flex-col items-center text-center ">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="-ml-5 h-40 w-40 mb-4 sm:h-80 sm:w-80 "
            />
            <div>
              <h1 className="text-4xl mr-6 font-bold text-black sm:text-8xl">
                KAMI ADA
              </h1>
              <br />
              <p className="text-2xl text-black sm:text-5xl">
                Mempermudah Mencari Jasa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
