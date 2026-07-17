import styled, { keyframes, css } from "styled-components";

// O'ngdan chapga kirish animatsiyasi
const slideIn = keyframes`
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Chapdan o'ngga chiqib ketish animatsiyasi
const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(120%);
    opacity: 0;
  }
`;

// Toastlarni ekranning o'ng burchagida ustma-ust saqlaydigan konteyner
export const ToastWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none; /* Kliklarni to'sib qo'ymasligi uchun */
`;

// Har bir alohida Toast kartasi
export const ToastCard = styled.div`
  pointer-events: auto; /* Elementning o'zini kliklash mumkin */
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  border-left: 5px solid #708238; /* Saytingizning yashil rangi */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 12px 16px;
  width: 320px;
  transition: all 0.3s ease-in-out;

  /* Animatsiyani trigger qilish */
  animation: ${(props) =>
    props.isExiting
      ? css`${slideOut} 0.3s ease-in-out forwards`
      : css`${slideIn} 0.3s ease-in-out forwards`};
`;

export const ToastImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 6px;
  background-color: #f9f9f9;
`;

export const ToastContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ToastTitle = styled.div`
  font-size: 13px;
  color: #888888;
  font-weight: 500;
`;

export const ToastMessage = styled.div`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;