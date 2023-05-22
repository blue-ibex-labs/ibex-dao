import NewsLetter from '../components/news';

import Footer from "../components/footer";
import HeaderBG from "../components/header_bg";
import MintBasics from "../components/howTo";
import GettingStarted from "../components/started";
import Timeline from '../components/timeline';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>IBEX DAO</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" />

      </Head>

      <HeaderBG />
      <Timeline />
      <MintBasics />
      <GettingStarted />
      <NewsLetter />
      <Footer />
    </div >
  );
};

export default Home;
