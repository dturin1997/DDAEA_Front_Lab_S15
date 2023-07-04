import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./user/LoginPage";
import HomePage from "./user/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:token" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
