const OurAgent = () => {
  return (
    <div className="text-center p-5 m-5 space-y-2">
      <h2 className="text-3xl font-poppins">Our Agent</h2>
      <p className="m-2 p-2">
        Lets introducing with our Agents of NextDwell
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 my-7 p-5 gap-7">
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/nsM4YH2/rc-cf-FMh5o5m5-N9-E-unsplash.jpg"
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
              Senior Chef
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/vc2N8CM/febrian-zakaria-Si-Qgni-cq-Fg-unsplash.jpg"
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
              Special chef
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/Nrw6BQ4/louis-hansel-v3-Ol-BE6-fh-U-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Habib Ullah
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Ribs Chef
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgent;
