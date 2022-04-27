import React from 'react';
import { Header, Footer, Main } from '../components';
import './styles.scss';

const HomeApp = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/v1/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  console.log(characters);

  return (
    <>
      <Header title="Home App" />
      <Main
        appName="Home"
        imgData={{ src: '../images/hank.jpg', alt: 'hank hill' }}
      >
        <h2>Cast</h2>
        <ul>
          {characters.map((character, index) => (
            <li key={`${character.name}#${index}`}>{character.name}</li>
          ))}
        </ul>
      </Main>
      <Footer />
    </>
  );
};

export default HomeApp;
