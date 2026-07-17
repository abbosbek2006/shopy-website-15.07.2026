import styled from "styled-components";

export const BannerSection = styled.section`
  width: 100%;
  padding: 40px 0 80px 0;
  background: #ffffff;
`;

export const BannerWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const BannerCard = styled.div`
  background: #f7f5ee; /* Yumshoq och sarg'ish/yashil fon */
  border-radius: 24px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  overflow: hidden;
  position: relative;
  min-height: 380px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 50px 30px;
    gap: 40px;
  }
`;

export const LeftContent = styled.div`
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1200px) {
    padding: 40px 50px;
  }

  @media (max-width: 992px) {
    padding: 0;
    align-items: center;
  }
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #70863c;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #181818;
  margin-bottom: 15px;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  max-width: 400px;
  margin-bottom: 35px;

  @media (max-width: 992px) {
    max-width: 500px;
  }
`;

export const ShopButton = styled.button`
  height: 52px;
  padding: 0 30px;
  background: #70863c;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #55682d;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(112, 134, 60, 0.2);
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  position: relative;

  img {
    max-width: 90%;
    max-height: 360px;
    object-fit: contain;
    /* Rasm pastki chiziqqa taqalib turishi uchun */
    margin-bottom: -5px; 
  }

  @media (max-width: 992px) {
    img {
      max-height: 280px;
      margin-bottom: 0;
    }
  }
`;