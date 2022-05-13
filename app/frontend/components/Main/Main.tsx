import React from 'react';
import { GreetingContainer, GreetingImage, GreetingText } from './styles';

type GreetingProps = {
  greeting: string;
  imgData: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
};

const Greeting = (props: GreetingProps) => {
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
