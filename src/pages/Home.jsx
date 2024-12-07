import Banner from "../components /Banner";
import Featured from "../components /home/Featured";
import OurAgent from "../components /OurAgent";
import Testimonials from "../components /Testimonials";
import WhySpecial from "../components /WhySpecial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured/>
      {/* <Review></Review> */}
      <Testimonials></Testimonials>
      <WhySpecial></WhySpecial>
      <OurAgent></OurAgent>
    </div>
  );
};

export default Home;
