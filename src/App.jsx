import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import AppHeader from "./components/app-header/index";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer"></div>
    </div>
  );
});

export default App;
