import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">12324</div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer"></div>
    </div>
  );
});

export default App;
