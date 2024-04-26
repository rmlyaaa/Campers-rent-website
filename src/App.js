import "./App.css";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "../src/components/SharedLayout.js";
import Home from "../src/pages/Home.js";
import Catalog from "../src/pages/Catalog.js";
import Favorites from "../src/pages/Favorites.js";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
