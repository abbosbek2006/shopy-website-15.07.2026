import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { categoriesData } from "./CategoriesData";
import {
  CategoriesSection,
  CategoriesWrapper,
  Header,
  Title,
  ViewAllLink,
  Grid,
  CategoryCard,
  ImageCircle,
  CategoryName,
} from "./Categories.styles";

const Categories = ({ activeCategory, onCategorySelect }) => {
  const handleCategoryClick = (categoryName) => {
    // Agar o'sha bosilgan kategoriya allaqachon faol bo'lsa, uni bekor qilib "All" qilamiz
    if (activeCategory === categoryName) {
      onCategorySelect("All");
    } else {
      onCategorySelect(categoryName);
    }
  };

  return (
    <CategoriesSection>
      <CategoriesWrapper>
        <Header>
          <Title>Shop by Categories</Title>
          {/* "All" holatiga qaytarish uchun View All tugmasini ishlatamiz */}
          <ViewAllLink 
            as="button" 
            onClick={() => onCategorySelect("All")}
            style={{ background: "none", border: "none", fontInherit: "inherit" }}
          >
            View All Categories <FiArrowRight />
          </ViewAllLink>
        </Header>

        <Grid>
          {categoriesData.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <CategoryCard 
                key={category.id} 
                onClick={() => handleCategoryClick(category.name)}
              >
                {/* isActive holatini style'ga prop qilib uzatamiz */}
                <ImageCircle bgColor={category.bgColor} isActive={isActive}>
                  <img src={category.image} alt={category.name} />
                </ImageCircle>
                <CategoryName isActive={isActive}>{category.name}</CategoryName>
              </CategoryCard>
            );
          })}
        </Grid>
      </CategoriesWrapper>
    </CategoriesSection>
  );
};

export default Categories;