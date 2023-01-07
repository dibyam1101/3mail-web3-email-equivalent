import React from "react";
import Root from "./routes/navigation";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation";
import Home from "./routes/home";
import GetStarted from "./routes/get-started"
const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Route>
  </Routes>
);

export default App;
