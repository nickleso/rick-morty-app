import { Route, Routes } from "react-router-dom";
import "./App.css";

import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
