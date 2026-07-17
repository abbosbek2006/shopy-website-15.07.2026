import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider, useCart } from "./context/CartContext"; // CartProviderni import qildik
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import Testimonials from "./components/Testimonials/Testimonials";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

// Toast bildirishnoma konteynerini import qilamiz
import ToastContainer from "./components/Toast/ToastContainer";

// Savatdagi mahsulotlar sonini Headerga uzatuvchi yordamchi komponent
const AppContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentTab, setCurrentTab] = useState("home");
  const { cartItems } = useCart(); // Global savatni olamiz

  return (
    <>
      <Header 
        cartCount={cartItems.length} // Dinamik ravishda savatdagi jami mahsulot soni chiqadi
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />

      {currentTab === "home" && (
        <>
          <Hero />
          <Features />
          <Categories 
            activeCategory={selectedCategory} 
            onCategorySelect={setSelectedCategory} 
          />
          {/* Products ichidagi har bir card endi savatga qo'shila oladi */}
          <Products selectedCategory={selectedCategory} />
          <PromoBanner />
          <Testimonials />
        </>
      )}

      {currentTab === "cart" && <Cart />}

      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        {/* ToastContainer shu yerga qo'shildi. U ekranning ustida doimiy tayyor turadi */}
        <ToastContainer />
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;