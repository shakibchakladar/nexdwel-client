const AddPropertyForm = ({ handleSubmit, setImagePreview, imagePreview,imageText,handleImage}) => {
  // const categories=''
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full p-10">
        {/* <div className="w-full"> */}
        <div className="w-full space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
              name="title"
              id="title"
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div className="space-y-6">
            <div className="w-full space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            <div className="flex items-center justify-around w-full p-4 m-auto bg-white rounded-lg p5 ">
              <div className="relative px-5 py-3 border-4 border-gray-300 border-dotted rounded-lg file_upload">
                <div className="flex flex-col mx-auto text-center w-max">
                  <label>
                    <input
                      className="hidden text-sm cursor-pointer w-36"
                      type="file"
                      onChange={(e) => {handleImage(e.target.files[0])}}
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="p-1 px-3 font-semibold text-white bg-purple-500 border border-gray-300 rounded cursor-pointer hover:bg-rose-500">
                      {/* Upload Image */}
                      {/* {imageText} */}
                      {/* {imageText.split('.')[0].slice(0,15)+'..'+imageText.split('.')[1]} */}
                      {imageText.length>20?imageText.split('.')[0].slice(0,15)+'..'+imageText.split('.')[1]:imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex items-center object-cover w-16 h-16 overflow-hidden">
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>
            {/* <div className="flex justify-between gap-2"> */}
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price Range
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                name="price"
                id="price"
                type="text"
                placeholder="Price"
                required
              />
            </div>
            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label htmlFor="price" className="block text-gray-600">
                  Agent Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                  name="Agent Name"
                  id="agent-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="w-full">
                <label htmlFor="price" className="block text-gray-600">
                  Agent email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                  name="Agent Name"
                  id="agent-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 font-medium text-center text-white transition duration-200 bg-purple-500 rounded shadow-md"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
