import React from "react";
import { featuresData } from "./FeaturesData";
import {
  FeaturesContainer,
  FeaturesWrapper,
  FeatureCard,
  IconWrapper,
  TextContent,
  FeatureTitle,
  FeatureDesc,
} from "./Features.styles";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        {featuresData.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <FeatureCard key={feature.id}>
              <IconWrapper>
                <IconComponent />
              </IconWrapper>
              <TextContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDesc>{feature.description}</FeatureDesc>
              </TextContent>
            </FeatureCard>
          );
        })}
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;