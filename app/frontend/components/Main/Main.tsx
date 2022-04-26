import React from 'react';
import { GreetingContainer, GreetingImage, GreetingText } from './styles';

const Greeting = (props) => {
  const { appName, imgData, children } = props;
  const { src, alt } = imgData;

  return (
    <GreetingContainer>
      <GreetingImage src={src} alt={alt} />
      <GreetingText>👋 Howdy from the {appName} App! 🤠</GreetingText>
      {children}
    </GreetingContainer>
  );
};

export default Greeting;
