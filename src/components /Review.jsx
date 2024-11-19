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

        <div className="w-full transition-all duration-300 transform border border-indigo-300 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl hover:scale-105 dark:border-gray-700">
          <div className="flex items-center p-5">
            <img
              className="w-16 h-16 border-4 border-indigo-500 rounded-full shadow-md"
              src="https://i.ibb.co/6Ph39fw/linkedin-sales-solutions-YDVdprpg-Hv4-unsplash.jpg"
              alt="Profile"
            />
            <div className="ml-5">
              <h5 className="text-lg font-bold text-indigo-900 dark:text-white">
                John Doe
              </h5>
              <p className="mt-1 text-sm leading-relaxed text-indigo-700 dark:text-gray-400">
                "The property exceeded our expectations! The views were
                stunning, and the amenities were top-notch. Highly recommend for
                a relaxing getaway."
              </p>
            </div>
          </div>
          <div className="px-5 pb-5 text-right">
            <button className="px-4 py-2 font-semibold text-white transition-transform duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-110">
              Read More
            </button>
          </div>
        </div>

        <div className="w-full transition-all duration-300 transform border border-indigo-300 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl hover:scale-105 dark:border-gray-700">
          <div className="flex items-center p-5">
            <img
              className="w-16 h-16 border-4 border-indigo-500 rounded-full shadow-md"
              src="https://i.ibb.co/6Ph39fw/linkedin-sales-solutions-YDVdprpg-Hv4-unsplash.jpg"
              alt="Profile"
            />
            <div className="ml-5">
              <h5 className="text-lg font-bold text-indigo-900 dark:text-white">
                John Doe
              </h5>
              <p className="mt-1 text-sm leading-relaxed text-indigo-700 dark:text-gray-400">
                "The property exceeded our expectations! The views were
                stunning, and the amenities were top-notch. Highly recommend for
                a relaxing getaway."
              </p>
            </div>
          </div>
          <div className="px-5 pb-5 text-right">
            <button className="px-4 py-2 font-semibold text-white transition-transform duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-110">
              Read More
            </button>
          </div>
        </div>

        <div className="w-full transition-all duration-300 transform border border-indigo-300 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl hover:scale-105 dark:border-gray-700">
          <div className="flex items-center p-5">
            <img
              className="w-16 h-16 border-4 border-indigo-500 rounded-full shadow-md"
              src="https://i.ibb.co/6Ph39fw/linkedin-sales-solutions-YDVdprpg-Hv4-unsplash.jpg"
              alt="Profile"
            />
            <div className="ml-5">
              <h5 className="text-lg font-bold text-indigo-900 dark:text-white">
                John Doe
              </h5>
              <p className="mt-1 text-sm leading-relaxed text-indigo-700 dark:text-gray-400">
                "The property exceeded our expectations! The views were
                stunning, and the amenities were top-notch. Highly recommend for
                a relaxing getaway."
              </p>
            </div>
          </div>
          <div className="px-5 pb-5 text-right">
            <button className="px-4 py-2 font-semibold text-white transition-transform duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-110">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
