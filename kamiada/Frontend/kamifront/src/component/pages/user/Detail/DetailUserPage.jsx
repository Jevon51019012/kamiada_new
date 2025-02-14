import React from "react";
import { NavbarUser } from "../../../fragment/UserNavbar/NavbarUser";
import { MenuDetailView } from "../../../section/user/Detail/MenuDetailView";

export const DetailUserPage = () => {
  return (
    <div>
      <NavbarUser />
      <div className="flex-grow bg-white p-4">
        <MenuDetailView />
      </div>
    </div>
  );
};
