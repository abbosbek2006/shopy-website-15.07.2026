import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext"; // Til context'ini ulaymiz
import { productsData } from "./ProductsData";
import ProductCard from "../ProductCard/ProductCard";
import {
  ProductsSection,
  ProductsWrapper,
  Header,
  Title,
  ViewAllLink,
  ProductsGrid,
} from "./Products.styles";

const Products = ({ selectedCategory }) => {
  const { t } = useLanguage(); // Tarjima funksiyasi
  const [showAll, setShowAll] = useState(false);

  // 1. Tanlangan kategoriya bo'yicha mahsulotlarni filtrlash
  const filteredProducts =
    !selectedCategory || selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  // 2. Limit qo'yish: showAll true bo'lsa hammasi, aks holda dastlabki 5 tasi
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 5);

  const handleToggleProducts = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  return (
    <ProductsSection>
      <ProductsWrapper>
        <Header>
          <Title>
            {selectedCategory && selectedCategory !== "All"
              ? `${selectedCategory}`
              : t("bestSelling")} {/* Dinamik sarlavha */}
          </Title>

          {/* Agar filtrlangan mahsulotlar 5 tadan ko'p bo'lsa, "View All" tugmasi chiqadi */}
          {filteredProducts.length > 5 && (
            <ViewAllLink href="#" onClick={handleToggleProducts}>
              {showAll ? t("showLess") : t("viewAll")}{" "}
              <FiArrowRight
                style={{
                  transform: showAll ? "rotate(-90deg)" : "none",
                  transition: "transform 0.3s ease",
                }}
              />
            </ViewAllLink>
          )}
        </Header>

        <ProductsGrid>
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              // Har bir mahsulot kartasini chiqaramiz
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "50px 0",
                color: "#888",
                fontSize: "18px",
              }}
            >
              {t("noProducts")} {/* Bo'sh kategoriya matni ham dinamik */}
            </div>
          )}
        </ProductsGrid>
      </ProductsWrapper>
    </ProductsSection>
  );
};

export default Products;