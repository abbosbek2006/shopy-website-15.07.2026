import styled from "styled-components";

export const TestimonialsSection = styled.section`
  width: 100%;
  padding: 60px 0 100px 0;
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #181818;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    font-size: 24px;
    margin-bottom: 35px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ArrowButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ececec;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #181818;
  font-size: 18px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: #70863c;
    color: white;
    border-color: #70863c;
  }

  @media (max-width: 992px) {
    display: none; /* Mobil qurilmalarda chetki tugmalarni yashirib turamiz */
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const TestimonialCard = styled.div`
  background: #faf8f5; /* Yumshoq fonga ega kartochka */
  border-radius: 20px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const QuoteIcon = styled.div`
  width: 44px;
  height: 44px;
  background: #e9ece1;
  color: #70863c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.7;
  font-style: italic;
  margin: 0;
  min-height: 80px; /* Matnlar balandligi bir xil turishi uchun */
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
  border-top: 1px solid #f0eeeb;
  padding-top: 20px;
`;

export const AuthorImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AuthorName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #181818;
`;

export const RatingStars = styled.div`
  display: flex;
  gap: 4px;
  color: #fbbf24;
  font-size: 12px;
`;