import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
