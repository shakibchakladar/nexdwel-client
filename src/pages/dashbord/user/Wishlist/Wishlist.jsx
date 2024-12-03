import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import WishlistCard from "./WishlistCard/WishlistCard";
import toast from "react-hot-toast";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/my-wishlist/${user.email}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch wishlist");
          setWishlist([]);
          return;
        }
        const data = await response.json();
        setWishlist(Array.isArray(data) ? data : []); 
      } catch (err) {
        setError("An error occurred while fetching the wishlist");
        console.error(err);
      }
    };

    fetchWishlist();
  }, []);

// handle remove
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/wishlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((property) => property._id !== id)
        );
        toast.success('Property successfully deleted!');
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
      });
  };


  if (error) {
    return <p>{error}</p>;
  }

  if (wishlist.length === 0) {
    return <p>No items in your wishlist.</p>;
  }

  return (
    <div>
      <h2>My Wishlist {wishlist.length}</h2>
      <div className="flex flex-col p-4">
        {
          wishlist.map(wishItem=><WishlistCard key={wishItem._id} wishItem={wishItem} handleDelete={handleDelete}/>)
        }
      </div>
    </div>
  );
};

export default Wishlist;
