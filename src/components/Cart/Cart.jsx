import React, { useState } from "react";
import { FiTrash2, FiHeart as FiHeartOutline, FiMinus, FiPlus } from "react-icons/fi"; // Bo'sh yurakcha
import { FaHeart } from "react-icons/fa"; // To'la qizil yurakcha
import { useLanguage } from "../../context/LanguageContext";
import { useCart } from "../../context/CartContext"; // Global savat va wishlist tizimi
import {
  CartContainer,
  CartWrapper,
  CartMain,
  CartSummary,
  CartTitle,
  SelectAllRow,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemTitle,
  ItemMeta,
  ItemControls,
  QuantitySelector,
  ItemPrice,
  PriceWrapper,
  OldPrice,
  ActionButtons,
  SummaryTitle,
  SummaryRow,
  PromoBox,
  PromoInput,
  PromoButton,
  DeliverySelector,
  DeliveryTab,
  AddressForm,
  FormInput,
  FormRow,
  CheckoutButton,
} from "./Cart.styles";

const Cart = () => {
  const { t, lang } = useLanguage();
  
  // CartContext ichidan kerakli hamma narsani olamiz (wishlist va toggleWishlist qo'shildi)
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    toggleCheck,
    toggleSelectAll,
    deleteSelected,
    wishlist = [],       // Global layklar ro'yxati
    toggleWishlist,      // Laykni o'chirish/yoqish funksiyasi
  } = useCart();

  const [deliveryType, setDeliveryType] = useState("pickup");

  // Har bir til uchun narxlarni moslashtirish koeffitsiyenti
  const getPriceDetails = (priceInRub) => {
    const rawPrice = priceInRub || 0;
    if (lang === "UZ") {
      return { value: Math.round(rawPrice * 150), symbol: t("currency") }; // 1 Rubl = 150 so'm
    }
    if (lang === "EN") {
      return { value: Math.round(rawPrice / 90), symbol: t("currency") }; // 1 Dollar = 90 rubl
    }
    return { value: rawPrice, symbol: t("currency") }; // Rus tilida Rubl
  };

  // Tanlangan mahsulotlarni hisoblash
  const selectedItems = cartItems.filter((item) => item.checked);

  const totalOriginalPriceInRub = selectedItems.reduce(
    (sum, item) => sum + (item.oldPriceInRub || item.priceInRub || item.price || 0) * item.quantity,
    0
  );
  const totalPriceInRub = selectedItems.reduce(
    (sum, item) => sum + (item.priceInRub || item.price || 0) * item.quantity,
    0
  );
  const totalDiscountInRub = totalOriginalPriceInRub - totalPriceInRub;

  // Hozirgi tanlangan tilga moslashtirilgan yakuniy narxlar
  const currentTotalOriginal = getPriceDetails(totalOriginalPriceInRub);
  const currentTotalPrice = getPriceDetails(totalPriceInRub);
  const currentTotalDiscount = getPriceDetails(totalDiscountInRub);

  const handleSelectAllChange = (e) => {
    toggleSelectAll(e.target.checked);
  };

  return (
    <CartContainer>
      <CartTitle>
        {t("cartTitle")} <span>{cartItems.length} {t("itemsCount")}</span>
      </CartTitle>

      <CartWrapper>
        {/* Chap tomon: Haqiqiy qo'shilgan mahsulotlar */}
        <CartMain>
          {cartItems.length > 0 ? (
            <>
              <SelectAllRow>
                <label>
                  <input
                    type="checkbox"
                    onChange={handleSelectAllChange}
                    checked={
                      cartItems.length > 0 &&
                      cartItems.every((item) => item.checked)
                    }
                  />
                  <span>{t("selectAll")}</span>
                </label>
                <button onClick={deleteSelected}>{t("deleteSelected")}</button>
              </SelectAllRow>

              {cartItems.map((item) => {
                const priceValue = item.priceInRub || item.price || 0;
                const oldPriceValue = item.oldPriceInRub || item.oldPrice || null;

                const itemPrice = getPriceDetails(priceValue);
                const itemOldPrice = oldPriceValue ? getPriceDetails(oldPriceValue) : null;

                // Ushbu mahsulot asosiy sahifada layk bosilganligini tekshiramiz
                const isItemLiked = wishlist.includes(item.id);

                return (
                  <CartItem key={item.id}>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <ItemImage src={item.image} alt={item.titleKey ? t(item.titleKey) : item.title} />
                    <ItemDetails>
                      <ItemTitle>{item.titleKey ? t(item.titleKey) : item.title}</ItemTitle>
                      <ItemMeta>
                        {t("color")}: {item.colorKey ? t(item.colorKey) : item.color} | {t("size")}: {item.size}
                      </ItemMeta>
                      
                      <ActionButtons>
                        {/* Savatdagi yurakcha tugmasi */}
                        <button 
                          className="wishlist" 
                          onClick={() => toggleWishlist(item.id)}
                          style={{ border: "none", background: "none", cursor: "pointer" }}
                        >
                          {isItemLiked ? (
                            <FaHeart style={{ color: "#ef4444", fontSize: "18px" }} />
                          ) : (
                            <FiHeartOutline style={{ fontSize: "18px" }} />
                          )}
                        </button>
                        <button className="delete" onClick={() => removeFromCart(item.id)}>
                          <FiTrash2 />
                        </button>
                      </ActionButtons>
                    </ItemDetails>

                    <ItemControls>
                      <QuantitySelector>
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <FiPlus />
                        </button>
                      </QuantitySelector>
                      <PriceWrapper>
                        <ItemPrice>
                          {(itemPrice.value * item.quantity).toLocaleString()} {itemPrice.symbol}
                        </ItemPrice>
                        {itemOldPrice && (
                          <OldPrice>
                            {(itemOldPrice.value * item.quantity).toLocaleString()} {itemOldPrice.symbol}
                          </OldPrice>
                        )}
                      </PriceWrapper>
                    </ItemControls>
                  </CartItem>
                );
              })}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px", color: "#9ca3af" }}>
              {t("emptyCart")}
            </div>
          )}
        </CartMain>

        {/* O'ng tomon: Summary */}
        <CartSummary>
          <SummaryTitle>{t("summary")}:</SummaryTitle>
          <SummaryRow>
            <span>{t("productsCount")}: {selectedItems.length} {t("pcs")}</span>
            <span>{currentTotalOriginal.value.toLocaleString()} {currentTotalOriginal.symbol}</span>
          </SummaryRow>
          <SummaryRow className="discount">
            <span>{t("discounts")}:</span>
            <span>- {currentTotalDiscount.value.toLocaleString()} {currentTotalDiscount.symbol}</span>
          </SummaryRow>
          <SummaryRow className="total">
            <span>{t("summary")}:</span>
            <span>{currentTotalPrice.value.toLocaleString()} {currentTotalPrice.symbol}</span>
          </SummaryRow>

          <PromoBox>
            <PromoInput placeholder={t("promoPlaceholder")} />
            <PromoButton>{t("apply")}</PromoButton>
          </PromoBox>

          <SummaryTitle style={{ marginTop: "24px" }}>
            {t("deliveryTitle")}
          </SummaryTitle>
          <DeliverySelector>
            <DeliveryTab
              active={deliveryType === "pickup"}
              onClick={() => setDeliveryType("pickup")}
            >
              {t("pickup")}
            </DeliveryTab>
            <DeliveryTab
              active={deliveryType === "delivery"}
              onClick={() => setDeliveryType("delivery")}
            >
              {t("delivery")}
            </DeliveryTab>
          </DeliverySelector>

          {deliveryType === "delivery" && (
            <AddressForm>
              <FormInput placeholder={t("address")} />
              <FormRow>
                <FormInput placeholder={t("apt")} />
                <FormInput placeholder={t("entrance")} />
              </FormRow>
              <FormRow>
                <FormInput placeholder={t("floor")} />
                <FormInput placeholder={t("intercom")} />
              </FormRow>
            </AddressForm>
          )}

          <CheckoutButton>{t("checkout")}</CheckoutButton>
        </CartSummary>
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;