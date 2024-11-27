import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?ga=GA1.1.805179126.1731543862&semt=ais_hybrid" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="https://i.ibb.co.com/BgRyHtZ/lotus-design-n-print-w-Rz-Barqn3hs-unsplash.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/Y0KLgDB/dillon-kydd-2ke-CPb73a-QY-unsplash-1.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
