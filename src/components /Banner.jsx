import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://i.ibb.co/5vf4wSp/garrett-parker-x-QWLtl-Qb7-L0-unsplash.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://i.ibb.co/RgZTj7P/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://i.ibb.co/njJPHkg/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
