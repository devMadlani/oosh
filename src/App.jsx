import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Product from "./components/Product";
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
