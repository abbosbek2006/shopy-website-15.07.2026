import styled from "styled-components";

export const FeaturesContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 40px 0;
`;

export const FeaturesWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 0 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 0 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 20px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #ffffff;
  padding: 10px;

  @media (max-width: 576px) {
    justify-content: flex-start;
    padding: 5px 10px;
  }
`;

export const IconWrapper = styled.div`
  width: 54px;
  height: 54px;
  background: #f2f5ea; /* Hero dagi badge rangi bilan bir xil, ajoyib uyg'unlik */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #70863c; /* Bizning asosiy yashil rang */
  font-size: 22px;
  flex-shrink: 0;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeatureTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #181818;
  margin: 0;
`;

export const FeatureDesc = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  font-weight: 500;
`;