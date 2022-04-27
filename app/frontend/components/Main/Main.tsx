import React from 'react';
import { GreetingContainer, GreetingImage, GreetingText } from './styles';

const Greeting = (props) => {
  const { greeting, imgData, children } = props;
  const { src, alt } = imgData;

  return (
    <GreetingContainer>
      <GreetingImage src={src} alt={alt} />
      <GreetingText>{greeting}</GreetingText>
      {children}
    </GreetingContainer>
  );
};

export default Greeting;
