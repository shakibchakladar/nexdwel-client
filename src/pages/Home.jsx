import Addv from "../components /Addv";
import Banner from "../components /Banner";
import OurAgent from "../components /OurAgent";
import Review from "../components /Review";
import WhySpecial from "../components /WhySpecial";

const Home = () => {
    return (
        <div>
            {/* <h2>This is Home</h2> */}
            <Banner></Banner>
            <Addv></Addv>
            <Review></Review>
            <WhySpecial></WhySpecial>
            <OurAgent></OurAgent>
        </div>
    );
};

export default Home;