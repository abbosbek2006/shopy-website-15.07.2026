import React from "react";
import heroData from "./HeroData";
import {
  HeroContainer,
  HeroWrapper,
  Left,
  Right,
  Badge,
  Title,
  Description,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  Customers,
  Avatars,
  Avatar,
  HeroImage,
  Platform,
} from "./Hero.styles";

import { FiArrowRight } from "react-icons/fi";

// Rasmlar importi
import HeroProduct from "../../assets/photo-remove.png";
import Avatar1 from "../../assets/images/hero/avatar1.jpg";
import Avatar2 from "../../assets/images/hero/avatar2.jpg";
import Avatar3 from "../../assets/images/hero/avatar3.jpg";
import Avatar4 from "../../assets/images/hero/avatar4.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <Left>
          <Badge>
            <span />
            {heroData.badge}
          </Badge>

          {/* Sarlavhani dinamik qildik */}
          <Title>
            {heroData.title}
          </Title>

          <Description>
            {heroData.description}
          </Description>

          <Buttons>
            <PrimaryButton>
              {heroData.primaryBtn}
              <FiArrowRight />
            </PrimaryButton>

            <SecondaryButton>
              {heroData.secondaryBtn}
            </SecondaryButton>
          </Buttons>

          <Customers>
            <Avatars>
              <Avatar src={Avatar1} alt="Customer 1" />
              <Avatar src={Avatar2} alt="Customer 2" />
              <Avatar src={Avatar3} alt="Customer 3" />
              <Avatar src={Avatar4} alt="Customer 4" />
            </Avatars>
            {/* Matnni to'liq HeroData'dan olyapmiz */}
            <p>{heroData.customers}</p>
          </Customers>
        </Left>

        <Right>
          <Platform />
          <HeroImage src={HeroProduct} alt="Hero Banner Product" />
        </Right>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;