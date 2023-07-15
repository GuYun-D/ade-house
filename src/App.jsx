import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import AppHeader from "./components/app-header/index";
import AppFooter from "./components/app-footer/index";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
