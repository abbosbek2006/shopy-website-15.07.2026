import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #faf8f5; /* Yumshoq och sarg'ish/yashil fon */
  padding: 80px 0 40px 0;
  border-top: 1px solid #f0eeeb;
`;

export const FooterWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 850;
  color: #181818;

  span {
    color: #70863c; /* Bizning asosiy yashil rang */
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
  max-width: 280px;
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #181818;
  margin: 0;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled.a`
  font-size: 15px;
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: #70863c;
    padding-left: 4px;
  }
`;

export const NewsletterText = styled.p`
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;

export const SubscribeForm = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 380px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  background: #ffffff;
  transition: border-color 0.2s;

  &:focus {
    border-color: #70863c;
  }
`;

export const SubscribeButton = styled.button`
  height: 48px;
  padding: 0 22px;
  background: #70863c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #55682d;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid #e9ece1;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    color: #9ca3af;
    margin: 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: #70863c;
    color: white;
    border-color: #70863c;
    transform: translateY(-2px);
  }
`;