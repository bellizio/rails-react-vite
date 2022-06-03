import React from 'react';
import styles from './Main.module.scss';

type MainProps = {
  greeting: string;
  imgData: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
};

const Main = (props: MainProps) => {
  const { greeting, imgData, children } = props;
  const { src, alt } = imgData;

  return (
    <main className={styles.greetingContainer}>
      <img className={styles.greetingImage} src={src} alt={alt} />
      <p className={styles.greetingText}>{greeting}</p>
      {children}
    </main>
  );
};

export default Main;
