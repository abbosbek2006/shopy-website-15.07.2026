import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonialsData } from "./TestimonialsData";
import {
  TestimonialsSection,
  Container,
  Title,
  SliderWrapper,
  ArrowButton,
  Grid,
  TestimonialCard,
  QuoteIcon,
  ReviewText,
  AuthorInfo,
  AuthorImg,
  AuthorMeta,
  AuthorName,
  RatingStars,
} from "./Testimonials.styles";

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <Title>What Our Customers Say</Title>

        <SliderWrapper>
          <ArrowButton>
            <FiChevronLeft />
          </ArrowButton>

          <Grid>
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id}>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <ReviewText>"{item.text}"</ReviewText>
                
                <AuthorInfo>
                  <AuthorImg src={item.image} alt={item.author} />
                  <AuthorMeta>
                    <AuthorName>{item.author}</AuthorName>
                    <RatingStars>
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </RatingStars>
                  </AuthorMeta>
                </AuthorInfo>
              </TestimonialCard>
            ))}
          </Grid>

          <ArrowButton>
            <FiChevronRight />
          </ArrowButton>
        </SliderWrapper>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;