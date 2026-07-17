import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toasts, setToasts] = useState([]); // Toastlar ro'yxati

  // Sevimlilar holati
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  // Toast qo'shish funksiyasi
  const showToast = (product) => {
    const toastId = Date.now();
    
    // Yangi toastni ro'yxatga qo'shish
    setToasts((prev) => [...prev, { id: toastId, product, isExiting: false }]);

    // 3 soniyadan keyin chiqish animatsiyasini boshlash
    setTimeout(() => {
      triggerToastExit(toastId);
    }, 3000);
  };

  // Toastni teskari animatsiya bilan yopishni boshlash
  const triggerToastExit = (id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isExiting: true } : t))
    );

    // Animatsiya (300ms) tugagach, ro'yxatdan butunlay o'chirish
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  };

  // Savatga mahsulot qo'shish funksiyasi
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { ...product, quantity: 1, checked: true },
      ];
    });

    // Mahsulot muvaffaqiyatli qo'shilgach, Toast bildirishnomasini chiqaramiz
    showToast(product);
  };

  // Savatdan mahsulotni o'chirish
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Miqdorini o'zgartirish (+/-)
  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Checkbox holatini o'zgartirish
  const toggleCheck = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Hammasini tanlash
  const toggleSelectAll = (isChecked) => {
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, checked: isChecked }))
    );
  };

  // Tanlanganlarni o'chirish
  const deleteSelected = () => {
    setCartItems((prev) => prev.filter((item) => !item.checked));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlist,
        toasts, // Toastlar
        triggerToastExit, // Toastni qo'lda yopish
        toggleWishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCheck,
        toggleSelectAll,
        deleteSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);