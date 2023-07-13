import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Deatil = React.lazy(() => import("@/views/detail"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/entire",
    element: <Entire></Entire>,
  },
  {
    path: "/detail",
    element: <Deatil></Deatil>,
  },
];

export default routes;
