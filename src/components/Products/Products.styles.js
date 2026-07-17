import styled from "styled-components";

export const ProductsSection = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #ffffff;
`;

export const ProductsWrapper = styled.div`
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

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;