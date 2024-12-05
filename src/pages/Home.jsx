import Banner from "../components /Banner";
import Featured from "../components /home/Featured";
import OurAgent from "../components /OurAgent";
import Review from "../components /Review";
import WhySpecial from "../components /WhySpecial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured/>
      <Review></Review>
      <WhySpecial></WhySpecial>
      <OurAgent></OurAgent>
    </div>
  );
};

export default Home;
