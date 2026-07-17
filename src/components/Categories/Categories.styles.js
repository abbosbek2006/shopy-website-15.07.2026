import styled from "styled-components";

export const CategoriesSection = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #ffffff;
`;

export const CategoriesWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #181818;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ViewAllLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #70863c;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #55682d;
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.08);
  }
`;

export const ImageCircle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: ${(props) => props.bgColor || "#f5f5f5"};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease;
  
  /* Agar kategoriya bosilgan bo'lsa yashil ramka va soya beramiz */
  border: 3px solid ${(props) => (props.isActive ? "#70863c" : "transparent")};
  box-shadow: ${(props) => (props.isActive ? "0 8px 20px rgba(112, 134, 60, 0.15)" : "none")};

  img {
    width: 75%;
    height: 75%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 380px) {
    width: 100px;
    height: 100px;
  }
`;

export const CategoryName = styled.span`
  font-size: 16px;
  font-weight: 600;
  /* Kategoriya faol bo'lsa matn rangi yashil bo'ladi */
  color: ${(props) => (props.isActive ? "#70863c" : "#181818")};
  text-align: center;
  transition: color 0.3s ease;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;