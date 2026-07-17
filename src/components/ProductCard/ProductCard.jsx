import React from "react"; // useState olib tashlandi, chunki endi ma'lumot global context'dan keladi
import { FiShoppingCart, FiHeart as FiHeartOutline } from "react-icons/fi"; // Feather Icons
import { FaHeart, FaStar } from "react-icons/fa"; // Font Awesome ikonkalari
import { useCart } from "../../context/CartContext"; // Global savat tizimi
import { useLanguage } from "../../context/LanguageContext"; // Global til tizimi
import {
  CardContainer,
  WishlistButton,
  ImageWrapper,
  ProductInfo,
  ProductTitle,
  RatingRow,
  PriceRow,
  Price,
  OldPrice,
  AddToCartButton,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  // toggleWishlist va wishlist o'zgaruvchilarini useCart ichidan chaqirib olamiz
  const { addToCart, toggleWishlist, wishlist = [] } = useCart();
  const { t, lang } = useLanguage();
  
  // Mahsulot wishlist (sevimlilar) ichida bor yoki yo'qligini tekshiramiz
  const isLiked = wishlist.includes(product.id);

  const handleLikeClick = () => {
    // Lokal state o'rniga global funksiyani ishga tushiramiz
    toggleWishlist(product.id);
  };

  // Har bir til uchun narxlarni moslashtirish va valyuta belgisini ko'rsatish
  const getFormattedPrice = (priceVal) => {
    const rawPrice = priceVal || 0;
    if (lang === "UZ") {
      return `${Math.round(rawPrice * 150).toLocaleString()} so'm`; // UZ tili uchun so'mda
    }
    if (lang === "EN") {
      return `$${Math.round(rawPrice / 90).toLocaleString()}`; // EN tili uchun dollarda
    }
    return `${rawPrice.toLocaleString()} ₽`; // RU tili uchun rublda
  };

  return (
    <CardContainer>
      {/* isLiked qiymati endi har doim to'g'ri (global) holatda keladi */}
      <WishlistButton onClick={handleLikeClick} isLiked={isLiked}>
        {isLiked ? <FaHeart style={{ color: "#ef4444" }} /> : <FiHeartOutline />}
      </WishlistButton>

      <ImageWrapper>
        <img src={product.image} alt={product.titleKey ? t(product.titleKey) : product.title} />
      </ImageWrapper>

      <ProductInfo>
        {/* Tilga mos sarlavha, agar til kaliti bo'lmasa eski static sarlavha chiqadi */}
        <ProductTitle>
          {product.titleKey ? t(product.titleKey) : product.title}
        </ProductTitle>
        
        <RatingRow>
          <span className="star"><FaStar /></span>
          <span className="rating-val">{product.rating}</span>
          <span>({product.reviews})</span>
        </RatingRow>

        <PriceRow>
          <Price>{getFormattedPrice(product.priceInRub || product.price)}</Price>
          {(product.oldPriceInRub || product.oldPrice) && (
            <OldPrice>
              {getFormattedPrice(product.oldPriceInRub || product.oldPrice)}
            </OldPrice>
          )}
        </PriceRow>
      </ProductInfo>

      {/* Savatga qo'shish tugmasi bosilganda mahsulotni barcha parametrlari bilan global savatga yuboradi */}
      <AddToCartButton onClick={() => addToCart({
        id: product.id,
        titleKey: product.titleKey || null,
        title: product.title,
        colorKey: product.colorKey || null,
        color: product.color || "White",
        size: product.size || "42",
        priceInRub: product.priceInRub || product.price,
        oldPriceInRub: product.oldPriceInRub || product.oldPrice || null,
        image: product.image
      })}>
        <FiShoppingCart /> {t("apply") === "KIRITISH" ? "Savatga qo'shish" : t("apply") === "ПРИМЕНИТЬ" ? "В korzinu" : "Add to Cart"}
      </AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;