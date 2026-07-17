import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px -5px #70863c8a;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }
`;

export const WishlistButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  /* Layk bosilgan bo'lsa fonda och qizil rang bo'ladi */
  background: ${(props) => (props.isLiked ? "#fef2f2" : "#ffffff")};
  /* Chegara rangi layk holatiga moslashadi */
  border: 1px solid ${(props) => (props.isLiked ? "#fca5a5" : "#f0f0f0")};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* Ikonka rangi layk holatiga qarab o'zgaradi */
  color: ${(props) => (props.isLiked ? "#ef4444" : "#9ca3af")};
  font-size: 18px;
  transition: all 0.2s ease;
  z-index: 5;

  &:hover {
    color: #ef4444;
    background: #fef2f2;
    border-color: #fca5a5;
    transform: scale(1.1); /* hover qilinganda biroz kattalashadi */
  }
  
  &:active {
    transform: scale(0.9); /* Bosilganda effekt beradi */
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #181818;
  margin: 0;
  line-height: 1.4;
  height: 44px; /* Ikki qatorli nomlar bir xil turishi uchun */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #6b7280;

  .star {
    color: #fbbf24; /* Oltin sariq rang */
    display: flex;
    align-items: center;
  }

  .rating-val {
    font-weight: 700;
    color: #181818;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #70863c; /* Asosiy yashil rang */
`;

export const OldPrice = styled.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #9ca3af;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  height: 44px;
  background: #70863c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #55682d;
  }
`;