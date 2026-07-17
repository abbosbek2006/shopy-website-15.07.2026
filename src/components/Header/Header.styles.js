import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky; /* Skrol bo'lganda yuqorida qotib turishi uchun */
  top: 0;            /* Eng tepaga yopishadi */
  z-index: 1000;     /* Boshqa elementlar header ostidan silliq o'tishi uchun */
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff; /* Orqa fon shaffof bo'lib qolmasligi uchun */
  border-bottom: 1px solid #f0f0f0;
  max-width: 1200px;
  margin: 0 auto;
  font-family: inherit;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const Logo = styled.a`
  font-size: 22px;
  font-weight: 800;
  color: #111827;
  text-decoration: none;
  letter-spacing: -0.5px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    display: none; /* Mobil versiyada menyuni yashirish yoki burger menyu qilish mumkin */
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #4b5563;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #70863c; /* Aktiv holatda yashil rang */
  }
`;

/* O'NG TOMONDAGI BLOCK */
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

/* 1. Til tanlash qismi */
export const LangSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  color: #4b5563;
  padding: 6px 10px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  .globe-icon {
    font-size: 16px;
  }

  .arrow-icon {
    font-size: 12px;
    color: #9ca3af;
  }

  .lang-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    margin-top: 8px;
    z-index: 10;
    overflow: hidden;

    div {
      padding: 10px 20px;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #f3f4f6;
        color: #70863c;
      }
    }
  }
`;

/* 2. Savatcha qismi */
export const CartIconWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #4b5563;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #70863c;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #ef4444; /* Qizil ogohlantirish nuqtasi */
  color: white;
  font-size: 10px;
  font-weight: 700;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 3. Akkaunt tugmasi (Sal kattaroq va ajralib turadigan dizayn) */
export const AccountButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #70863c; /* Saytning yashil brend rangi */
  color: #ffffff;
  padding: 10px 18px;
  border-radius: 12px; /* Yumaloq burchak */
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(112, 134, 60, 0.25); /* Yengil yashil soya */
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 18px; /* Ikonka sal kattaroq */
  }

  &:hover {
    background-color: #55682d; /* To'qroq yashil */
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(85, 104, 45, 0.35);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    padding: 8px;
    span {
      display: none; /* Mobilda faqat ikonka qoladi */
    }
  }
`;