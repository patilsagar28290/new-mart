import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About.tsx";
import Contact from "./Contact/Contact.tsx";
import NotFound from "./NotFound/NotFound.tsx";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";


createRoot(document.getElementById("root")!).render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
);
