import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  UZ: {
    // Header
    catalog: "Katalog",
    blog: "Blog",
    contacts: "Kontaktlar",
    help: "Yordam",
    cabinet: "Shaxsiy kabinet",
    // Cart Page
    cartTitle: "SAVATCHA",
    itemsCount: "ta mahsulot",
    selectAll: "Hammasini tanlash",
    deleteSelected: "Tanlanganlarni o'chirish",
    color: "Rangi",
    size: "O'lchami",
    emptyCart: "Savatchangiz bo'sh",
    summary: "Jami",
    productsCount: "Mahsulotlar",
    pcs: "dona",
    discounts: "Chegirma va aksiyalar",
    promoTitle: "Promokod kiritish",
    promoPlaceholder: "Promokodni kiriting",
    apply: "KIRITISH",
    deliveryTitle: "Yetkazib berish usulini tanlang",
    pickup: "OLIB KETISH",
    delivery: "YETKAZIB BERISH",
    address: "Yetkazib berish manzili",
    apt: "Xonadon/ofis",
    entrance: "Yo'lak",
    floor: "Qavat",
    intercom: "Domofon",
    checkout: "BUYURTMA BERISH",
    currency: "so'm",
    
    // Mahsulotlar tarjimasi
    prod1_title: "Erkaklar keti Nike Air Force 1",
    prod1_color: "Oq",
    prod2_title: "Erkaklar krossovkasi Nike Zoomx Zegama Trail",
    prod2_color: "Oq/Kulrang"
  },
  RU: {
    // Header
    catalog: "Каталог",
    blog: "Блог",
    contacts: "Контакты",
    help: "Помощь",
    cabinet: "Личный кабинет",
    // Cart Page
    cartTitle: "КОРЗИНА",
    itemsCount: "товара",
    selectAll: "Выбрать все",
    deleteSelected: "Удалить выбранное",
    color: "Цвет",
    size: "Размер",
    emptyCart: "Ваша корзина пуста",
    summary: "Итого",
    productsCount: "Товары",
    pcs: "шт",
    discounts: "Скидки и акции",
    promoTitle: "Применить промокод",
    promoPlaceholder: "Введите промокод",
    apply: "ПРИМЕНИТЬ",
    deliveryTitle: "Выберите способ получения",
    pickup: "САМОВЫВОЗ",
    delivery: "ДОСТАВКА",
    address: "Адрес доставки",
    apt: "Кв/офис",
    entrance: "Подъезд",
    floor: "Этаж",
    intercom: "Домофон",
    checkout: "ОФОРМИТЬ",
    currency: "₽",
    
    // Mahsulotlar tarjimasi
    prod1_title: "Кеды мужские Nike Air Force 1",
    prod1_color: "Белый",
    prod2_title: "Кроссовки мужские Nike Zoomx Zegama Trail",
    prod2_color: "Белый/Серый"
  },
  EN: {
    // Header
    catalog: "Catalog",
    blog: "Blog",
    contacts: "Contacts",
    help: "Help",
    cabinet: "My Account",
    // Cart Page
    cartTitle: "SHOPPING CART",
    itemsCount: "items",
    selectAll: "Select all",
    deleteSelected: "Delete selected",
    color: "Color",
    size: "Size",
    emptyCart: "Your cart is empty",
    summary: "Summary",
    productsCount: "Products",
    pcs: "pcs",
    discounts: "Discounts & promo",
    promoTitle: "Apply promo code",
    promoPlaceholder: "Enter promo code",
    apply: "APPLY",
    deliveryTitle: "Choose shipping method",
    pickup: "PICKUP",
    delivery: "DELIVERY",
    address: "Delivery address",
    apt: "Apt/Office",
    entrance: "Entrance",
    floor: "Floor",
    intercom: "Intercom",
    checkout: "CHECKOUT",
    currency: "$",
    
    // Mahsulotlar tarjimasi
    prod1_title: "Men's Sneakers Nike Air Force 1",
    prod1_color: "White",
    prod2_title: "Men's Running Shoes Nike Zoomx Zegama Trail",
    prod2_color: "White/Grey"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("UZ");

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);