import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  background: #faf8f2;
  padding: 60px 0;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    padding: 70px 0;
  }

  @media (max-width: 576px) {
    padding: 50px 0;
  }
`;

export const HeroWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding: 0 40px;

  @media (max-width: 1400px) {
    max-width: 1200px;
    gap: 30px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 0 30px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (max-width: 480px) {
    padding: 0 18px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    align-items: center;
    order: 2;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  padding: 10px 18px;
  background: #f2f5ea;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: #667b2f;
  margin-bottom: 30px;

  span {
    width: 8px;
    height: 8px;
    background: #7f9442;
    border-radius: 50%;
  }

  @media (max-width: 576px) {
    font-size: 13px;
    padding: 8px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  color: #181818;
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    font-size: 64px;
  }

  @media (max-width: 1200px) {
    font-size: 58px;
  }

  @media (max-width: 992px) {
    font-size: 52px;
  }

  @media (max-width: 768px) {
    font-size: 44px;
  }

  @media (max-width: 576px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }

  @media (max-width: 380px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.8;
  color: #6b7280;
  max-width: 540px;
  margin-bottom: 45px;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 992px) {
    max-width: 650px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }

  @media (max-width: 380px) {
    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  height: 60px;
  padding: 0 35px;
  background: #70863c;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    transform: translateY(-4px);
    background: #55682d;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    height: 54px;
    font-size: 15px;
  }
`;

export const SecondaryButton = styled.button`
  height: 60px;
  padding: 0 35px;
  background: white;
  border: 1px solid #ececec;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    height: 54px;
    font-size: 15px;
  }
`;

export const Customers = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;

    p {
      text-align: center;
      font-size: 15px;
    }
  }
`;

export const Avatars = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid white;
  margin-left: -12px;
  object-fit: cover;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 576px) {
    width: 42px;
    height: 42px;
  }
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    order: 1;
    margin-bottom: 40px;
  }
`;

export const Platform = styled.div`
  position: absolute;
  bottom: 0;
  width: 650px;
  height: 220px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 40px 70px rgba(0, 0, 0, 0.08);

  @media (max-width: 1400px) {
    width: 600px;
    height: 200px;
  }

  @media (max-width: 1200px) {
    width: 540px;
    height: 190px;
  }

  @media (max-width: 992px) {
    width: 500px;
    height: 180px;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 150px;
  }

  @media (max-width: 576px) {
    width: 340px;
    height: 130px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 110px;
  }

  @media (max-width: 380px) {
    width: 240px;
    height: 95px;
  }
`;

export const HeroImage = styled.img`
  width: 560px;
  position: relative;
  z-index: 10;
  animation: float 4s ease infinite;
  margin-bottom: 50px;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1400px) {
    width: 520px;
  }

  @media (max-width: 1200px) {
    width: 480px;
  }

  @media (max-width: 992px) {
    width: 440px;
  }

  @media (max-width: 768px) {
    width: 360px;
  }

  @media (max-width: 576px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 260px;
  }

  @media (max-width: 380px) {
    width: 220px;
  }
`;