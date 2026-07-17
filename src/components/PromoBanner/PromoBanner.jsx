import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  BannerSection,
  BannerWrapper,
  BannerCard,
  LeftContent,
  Subtitle,
  Title,
  Description,
  ShopButton,
  RightContent,
} from "./PromoBanner.styles";

// O'ng tomondagi xaltacha va gul tuvagi rasmi
import BannerImg from "../../assets/images//promo Banner/promo-banner.png"; 

const PromoBanner = () => {
  return (
    <BannerSection>
      <BannerWrapper>
        <BannerCard>
          <LeftContent>
            <Subtitle>Special Offer</Subtitle>
            <Title>Up to 50% Off</Title>
            <Description>
              Limited time offer on selected items. Hurry up and grab the best deals before they are gone!
            </Description>
            <ShopButton>
              Shop the Sale <FiArrowRight />
            </ShopButton>
          </LeftContent>

          <RightContent>
            <img src={BannerImg} alt="Special Promo Offer" />
          </RightContent>
        </BannerCard>
      </BannerWrapper>
    </BannerSection>
  );
};

export default PromoBanner;