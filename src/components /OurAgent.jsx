const OurAgent = () => {
  return (
    <div className="p-5 m-5 space-y-2 text-center">
      <h2 className="text-3xl font-bold text-purple-500 font-poppins">Our Agent</h2>
      <p className="p-2 m-2">
        Lets introducing with our Agents of NextDwell
      </p>
      <div className="grid grid-cols-1 p-5 md:grid-cols-3 my-7 gap-7">
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/V9D0g14/austin-distel-jp-Hw8ndw-J-Q-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Islam Uddin
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Senior Agent
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/kDhV1jM/Screenshot-2024-09-03-at-12-13-55-AM.png"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Ms Choudhury
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Special Agent
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/w68DjJ4/Screenshot-2024-09-03-at-12-15-25-AM.png"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
               Miss Zara
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
             Special Agent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgent;
