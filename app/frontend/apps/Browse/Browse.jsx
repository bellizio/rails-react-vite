import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Main } from '~/components/Main';
import Bobby from '~/images/bobby.gif';
import '../styles.scss';

const BrowseApp = () => {
  return (
    <>
      <Header title="Browse App" />
      <Main
        greeting="This is a rails rendered route."
        imgData={{
          src: Bobby,
          alt: 'bobby hill dancing in pajamas',
        }}
      />
      <Footer />
    </>
  );
};

export default BrowseApp;
