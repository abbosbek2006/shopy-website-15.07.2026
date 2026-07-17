import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiGlobe, FiChevronDown } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLink,
  HeaderActions,
  LangSelector,
  CartIconWrapper,
  CartBadge,
  AccountButton,
} from "./Header.styles";

const Header = ({ cartCount = 2, currentTab, setCurrentTab }) => {
  const { lang, setLang, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handleLangChange = (selectedLang, e) => {
    e.stopPropagation(); // Til tanlaganda dropdown yopilishi uchun klik tarqalishini to'xtatamiz
    setLang(selectedLang);
    setShowLangMenu(false);
  };

  return (
    <HeaderContainer>
      {/* Logotip bosilganda Bosh sahifaga qaytadi */}
      <Logo href="#" onClick={(e) => { e.preventDefault(); setCurrentTab("home"); }}>
        Hyper Step
      </Logo>

      <NavLinks>
        <NavLink href="#" onClick={(e) => { e.preventDefault(); setCurrentTab("home"); }} active={currentTab === "home"}>
          {t("catalog")}
        </NavLink>
        <NavLink href="#" onClick={(e) => e.preventDefault()}>{t("blog")}</NavLink>
        <NavLink href="#" onClick={(e) => e.preventDefault()}>{t("contacts")}</NavLink>
        <NavLink href="#" onClick={(e) => e.preventDefault()}>{t("help")}</NavLink>
      </NavLinks>

      <HeaderActions>
        {/* Uchta tilli tanlagich (UZ, RU, EN) */}
        <LangSelector onClick={() => setShowLangMenu(!showLangMenu)}>
          <FiGlobe className="globe-icon" />
          <span>{lang}</span>
          <FiChevronDown className="arrow-icon" />
          
          {showLangMenu && (
            <div className="lang-dropdown">
              <div onClick={(e) => handleLangChange("UZ", e)}>UZ</div>
              <div onClick={(e) => handleLangChange("RU", e)}>RU</div>
              <div onClick={(e) => handleLangChange("EN", e)}>EN</div>
            </div>
          )}
        </LangSelector>

        {/* Savat tugmasi bosilganda Cart sahifasiga o'tadi */}
        <CartIconWrapper href="#" onClick={(e) => { e.preventDefault(); setCurrentTab("cart"); }} active={currentTab === "cart"}>
          <FiShoppingCart />
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </CartIconWrapper>

        {/* Akkaunt - Ajralib turuvchi kattaroq chiroyli tugma */}
        <AccountButton href="#" onClick={(e) => e.preventDefault()}>
          <FiUser />
          <span>{t("cabinet")}</span>
        </AccountButton>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;