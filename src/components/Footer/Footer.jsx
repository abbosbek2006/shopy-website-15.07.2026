import React from "react";
import { FiShoppingBag, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import {
  FooterContainer,
  FooterWrapper,
  Grid,
  Column,
  LogoRow,
  Description,
  ColumnTitle,
  LinksList,
  FooterLink,
  NewsletterText,
  SubscribeForm,
  Input,
  SubscribeButton,
  BottomBar,
  Socials,
  SocialIcon,
} from "./Footer.styles";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Newsletter obunasi tasdiqlandi!");
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Grid>
          {/* 1-ustun: Logo va Ta'rif */}
          <Column>
            <LogoRow>
              <FiShoppingBag color="#70863c" /> Shop<span>Mate</span>
            </LogoRow>
            <Description>
              Your one-stop shop for quality products at the best prices. Enjoy fast delivery and great support.
            </Description>
          </Column>

          {/* 2-ustun: Tezkor havolalar */}
          <Column>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinksList>
              <li><FooterLink href="#">Home</FooterLink></li>
              <li><FooterLink href="#">Shop</FooterLink></li>
              <li><FooterLink href="#">Categories</FooterLink></li>
              <li><FooterLink href="#">About Us</FooterLink></li>
            </LinksList>
          </Column>

          {/* 3-ustun: Xizmatlar */}
          <Column>
            <ColumnTitle>Customer Service</ColumnTitle>
            <LinksList>
              <li><FooterLink href="#">Track Order</FooterLink></li>
              <li><FooterLink href="#">Returns & Refunds</FooterLink></li>
              <li><FooterLink href="#">Shipping Policy</FooterLink></li>
              <li><FooterLink href="#">Help Center</FooterLink></li>
            </LinksList>
          </Column>

          {/* 4-ustun: Newsletter */}
          <Column>
            <ColumnTitle>Subscribe to our newsletter</ColumnTitle>
            <NewsletterText>
              Get the latest updates on new products and upcoming sales directly to your inbox.
            </NewsletterText>
            <SubscribeForm onSubmit={handleSubmit}>
              <Input type="email" placeholder="Enter your email" required />
              <SubscribeButton type="submit">Subscribe</SubscribeButton>
            </SubscribeForm>
          </Column>
        </Grid>

        {/* Pastki qism mualliflik huquqi */}
        <BottomBar>
          <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
          <Socials>
            <SocialIcon href="#"><FiFacebook /></SocialIcon>
            <SocialIcon href="#"><FiTwitter /></SocialIcon>
            <SocialIcon href="#"><FiInstagram /></SocialIcon>
            <SocialIcon href="#"><FiYoutube /></SocialIcon>
          </Socials>
        </BottomBar>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;