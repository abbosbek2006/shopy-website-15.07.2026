import React from "react";
import { useCart } from "../../context/CartContext";
import { useLanguage } from "../../context/LanguageContext";
import { IoCloseOutline } from "react-icons/io5"; // Yopish ikonkasi
import {
  ToastWrapper,
  ToastCard,
  ToastImage,
  ToastContent,
  ToastTitle,
  ToastMessage,
  CloseButton,
} from "./ToastContainer.styles";

const ToastContainer = () => {
  const { toasts, triggerToastExit } = useCart();
  const { t } = useLanguage();

  if (toasts.length === 0) return null;

  return (
    <ToastWrapper>
      {toasts.map((toast) => {
        const titleText = toast.product.titleKey 
          ? t(toast.product.titleKey) 
          : toast.product.title;

        return (
          <ToastCard key={toast.id} isExiting={toast.isExiting}>
            <ToastImage src={toast.product.image} alt={titleText} />
            <ToastContent>
              <ToastTitle>{t("cartTitle") === "SAVATCHA" ? "Savatchaga qo'shildi!" : "Added to Cart!"}</ToastTitle>
              <ToastMessage>{titleText}</ToastMessage>
            </ToastContent>
            <CloseButton onClick={() => triggerToastExit(toast.id)}>
              <IoCloseOutline />
            </CloseButton>
          </ToastCard>
        );
      })}
    </ToastWrapper>
  );
};

export default ToastContainer;