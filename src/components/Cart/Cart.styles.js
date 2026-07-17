import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: inherit;
  color: #1f2937;
`;

export const CartTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 30px;
  text-transform: uppercase;

  span {
    font-size: 16px;
    color: #9ca3af;
    font-weight: 400;
  }
`;

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SelectAllRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f3f4f6;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 15px;

    input {
      width: 18px;
      height: 18px;
      accent-color: #70863c; /* Saytingizning yashil rangi */
    }
  }

  button {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartItem = styled.div`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #70863c;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background: #f9fafb;
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const ItemMeta = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #9ca3af;
    transition: color 0.2s;

    &.wishlist:hover {
      color: #ef4444;
    }

    &.delete:hover {
      color: #111827;
    }
  }
`;

export const ItemControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  min-width: 120px;

  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #f9fafb;
  overflow: hidden;

  button {
    border: none;
    background: none;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #4b5563;

    &:hover {
      background: #e5e7eb;
    }
  }

  span {
    padding: 0 12px;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const PriceWrapper = styled.div`
  text-align: right;
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

export const OldPrice = styled.div`
  font-size: 13px;
  text-decoration: line-through;
  color: #9ca3af;
  margin-top: 2px;
`;

/* O'NG BLOK - HISOB-KITOB */
export const CartSummary = styled.div`
  background: #fcfcfc;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 24px;
  align-self: start;
`;

export const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 12px;

  &.discount {
    color: #ef4444;
    font-weight: 500;
  }

  &.total {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    border-top: 1px solid #f3f4f6;
    padding-top: 15px;
    margin-top: 15px;
  }
`;

export const PromoBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const PromoInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #70863c;
  }
`;

export const PromoButton = styled.button`
  background: #70863c;
  color: #ffffff;
  border: none;
  padding: 0 16px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #55682d;
  }
`;

export const DeliverySelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const DeliveryTab = styled.button`
  border: none;
  background: ${(props) => (props.active ? "#70863c" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#4b5563")};
  padding: 10px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => (props.active ? "#ffffff" : "#111827")};
  }
`;

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #70863c;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #70863c;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: #55682d;
  }
`;