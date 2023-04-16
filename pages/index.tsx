
import Footer from "../components/footer";
// import HeaderBG from "../components/header_bg";
import MintBasics from "../components/howTo";
import NewsLetter from '../components/news';
import GettingStarted from "../components/started";
// import Timeline from '../components/timeline';

const Home = () => {

  return (
    <div>

      {/* <HeaderBG /> */}
      <GettingStarted />
      <NewsLetter />
      <MintBasics />
      {/* <Timeline /> */}
      <Footer />
    </div >
  );
};

export default Home;
