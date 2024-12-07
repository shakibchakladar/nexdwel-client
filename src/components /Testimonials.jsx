import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegStar } from "react-icons/fa";
import "swiper/css";  // Core Swiper styles
import "swiper/css/navigation";  // Navigation styles
import SectionTitle from "../pages/shared/SectionTitle";
import {Navigation} from 'swiper/modules'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/reviews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      />
      <Swiper
        modules={[Navigation]}  // Pass Navigation as a module
        navigation={true}       // Enable navigation functionality
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="px-10 mx-8 my-4 space-y-5 text-center p-9">
              <div className="flex justify-center">
                {renderStars(review?.rating)}
              </div>
              <p className="text-xl text-black">{review?.details}</p>
              <h3 className="text-3xl text-[#CD9003]">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
