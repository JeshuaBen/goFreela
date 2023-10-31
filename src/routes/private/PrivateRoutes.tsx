import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const { VITE_lOCAL_STORAGE_TOKEN } = import.meta.env;

const PrivateRoutes = () => {
  const token = localStorage.getItem(String(VITE_lOCAL_STORAGE_TOKEN));

  return token ? <Outlet /> : <Navigate replace to={"/signIn"} />;
};

export default PrivateRoutes;
