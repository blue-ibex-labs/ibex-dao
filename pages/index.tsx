import NewsLetter from '../components/news';

import Footer from "../components/footer";
import HeaderBG from "../components/header_bg";
import MintBasics from "../components/howTo";
import GettingStarted from "../components/started";
import Timeline from '../components/timeline';

const Home = () => {

  return (
    <div>

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
