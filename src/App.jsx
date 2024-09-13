import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Product from "./components/Product";
import { ProductProvider } from "./components/ProductProvider";
import ProductDetails from "./components/ProductDetails";
import Terms from "./components/terms";
import Policy from "./components/Policy";
import AddCart from "./components/AddCart";
import Checkout from "./components/Checkout";
import Done from "./components/Done";
ProductProvider
export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
    
        <Navbar />
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/itemDetails" element={<ProductDetails/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/cart" element={<AddCart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/done" element={<Done/>}/>
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    </ProductProvider>
  );
}
