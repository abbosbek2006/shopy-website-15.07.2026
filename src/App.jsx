import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider, useCart } from "./context/CartContext"; 
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import Testimonials from "./components/Testimonials/Testimonials";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ToastContainer from "./components/Toast/ToastContainer";

const AppContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentTab, setCurrentTab] = useState("home");
  const { cartItems } = useCart(); 

  return (
    <>
      <Header 
        cartCount={cartItems.length} 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />

      {/* Header fixed bo'lgani uchun asosiy kontentni 80px pastga suramiz */}
      <div style={{ paddingTop: "80px" }}> 
        {currentTab === "home" && (
          <>
            <Hero />
            <Features />
            <Categories 
              activeCategory={selectedCategory} 
              onCategorySelect={setSelectedCategory} 
            />
            <Products selectedCategory={selectedCategory} />
            <PromoBanner />
            <Testimonials />
          </>
        )}

        {currentTab === "cart" && <Cart />}

        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <ToastContainer />
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;