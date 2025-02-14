import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { HomeUserPage } from "./component/pages/user/Home/HomeUserPage";
import { MenuUserPage } from "./component/pages/user/Menu/MenuUserPage";
import { LoginPage } from "./component/pages/Auth/Login/LoginPage";
import { RegisterPage } from "./component/pages/Auth/Register/RegisterPage";
import { DetailUserPage } from "./component/pages/user/Detail/DetailUserPage";
import { ViewUserPage } from "./component/pages/user/Menu/ViewUserPage";
import { MenuDetailView } from "./component/section/user/Detail/MenuDetailView";
import { UserMenuView } from "./component/section/user/Menu/UserMenuView";
import UserSearchView from "./component/section/user/Menu/UserSearchView";
import AuthWrapper from "./component/COnfig/AuthWrapper";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <HomeUserPage />,
  },
  {
    path: "/jasa",
    element: (
      <AuthWrapper requiredRole="buyer">
        <MenuUserPage />
      </AuthWrapper>
    ),
  },
  {
    path: "/jasa/:id",
    element: (
      <AuthWrapper requiredRole="buyer">
        <MenuDetailView />
      </AuthWrapper>
    ),
  },
  {
    path: "/jasa/search",
    element: (
      <AuthWrapper requiredRole="buyer">
        <UserSearchView />
      </AuthWrapper>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
