import { useContext, useState } from "react";
// import AddPropertyForm from "../../../../components/form/AddPropertyForm";
import { AuthContext } from "../../../../provider/AuthProvider";
import { imageUpload } from "../../../../api/utls";
import { HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2"; // Import SweetAlert2
import AddPropertyForm from "../../../../components /form/AddPropertyForm";

const AddProperty = () => {
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("upload image");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.target;
    const property_title = form.title.value.trim();
    const property_location = form.location.value.trim();
    const property_image = form.image.files[0];
    const price_range = form.price.value.trim();
    const description=form.description.value;

    if (!property_title || !property_location || !price_range || !property_image) {
      setError("Please fill in all fields and select an image.");
      setLoading(false);
      return;
    }

    const agent = {
      name: user?.displayName,
      imagea: user?.photoURL,
      email: user?.email,
    };

    try {
      const image_url = await imageUpload(property_image);
      console.log(image_url);
      console.log(agent);

      const propertyData = {
        property_title,
        property_location,
        price_range,
        agent_name:agent.name,
        agent_email:agent.email,
        property_image: image_url,
        agent_image:agent.imagea,
        description
      };
      console.table(propertyData);

      const response = await fetch('http://localhost:5000/add-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      const data = await response.json();
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "Property added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setSuccess(true);
      }
    } catch (err) {
      console.error("Image upload or data submission failed:", err);
      setError("Failed to add property. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle image preview
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Property added successfully!</p>
      )}
      <HelmetProvider>
        <title>Add Property | Dashboard</title>
      </HelmetProvider>
      <AddPropertyForm
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
      />
    </div>
  );
};

export default AddProperty;
