import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing } from "./Landing/Landing";
import { Items } from "./Items/Items";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/items" element={<Items />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
