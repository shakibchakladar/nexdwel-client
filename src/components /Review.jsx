const Review = () => {
  return (
    <div>
      <div className="m-10 space-y-5 text-center p-15 ">
        <h2 className="text-5xl font-extrabold text-purple-500 font-poppins ">
          Latest User review
        </h2>
        <p>Here you can see our clients latest review</p>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
        {/* {addv?.map((add) => (
          <AddvCard key={add._id} add={add}></AddvCard>
        ))} */}

<div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="flex items-center p-5">
            <img
              className="w-12 h-12 rounded-full"
              src="https://i.ibb.co/6Ph39fw/linkedin-sales-solutions-YDVdprpg-Hv4-unsplash.jpg"
              alt=""
            />
            <div className="ml-3">
              <h5 className="text-lg font-semibold text-gray-900 ">
                Name:John doe
              </h5>
              <p className="text-sm text-gray-500">
                The property exceeded our expectations! The views were stunning,
                and the amenities were top-notch. Highly recommend for a
                relaxing getaway
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <p className="text-gray-700 dark:text-gray-300"></p>
          </div>
        </div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="flex items-center p-5">
            <img
              className="w-12 h-12 rounded-full"
              src="https://i.ibb.co.com/1nQ1913/austin-distel-w-D1-LRb9-Oe-Eo-unsplash.jpg"
              alt=""
            />
            <div className="ml-3">
              <h5 className="text-lg font-semibold text-gray-900 ">
                Name:Md Karim
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The property exceeded our expectations! The views were stunning,
                and the amenities were top-notch. Highly recommend for a
                relaxing getaway
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <p className="text-gray-700 dark:text-gray-300"></p>
          </div>
        </div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="flex items-center p-5">
            <img
              className="w-12 h-12 rounded-full"
              src="https://i.ibb.co.com/TqfVzd0/austin-distel-Vv-Acr-Va56fc-unsplash.jpg"
              alt=""
            />
            <div className="ml-3">
              <h5 className="text-lg font-semibold text-gray-900 ">
                Name:Md Rahim
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The property exceeded our expectations! The views were stunning,
                and the amenities were top-notch. Highly recommend for a
                relaxing getaway
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <p className="text-gray-700 dark:text-gray-300"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
