import { useEffect, useState } from 'react';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Main } from '~/components/Main';
import Hank from '~/images/hank.jpg';
import '../styles.scss';

const HomeApp = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('/api/v1/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <Header title="Home App" />
      <Main
        greeting="This is a rails rendered route."
        imgData={{ src: Hank, alt: 'hank hill' }}
      >
        <h2>Cast Fetched from api/v1/characters</h2>
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
