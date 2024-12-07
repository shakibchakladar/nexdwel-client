import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ closeModal, bookingInfo }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
    // fetch client secret
    if (bookingInfo?.price && bookingInfo?.price > 1) {
      getClientSecret({ price: bookingInfo?.price });
    }
  }, []);

  //   get client secret
  const getClientSecret = async (price) => {
    const { data } = await axios.post(
      `http://localhost:5000/create-payment-intent`,
      price
    );
    console.log(data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError(" ");
    }
    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      console.log(paymentInfo);
     try{
        const {data}=await axios.post("http://localhost:5000/booking",{paymentInfo})
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment successfully Completed",
                showConfirmButton: false,
                timer: 1500
              })
        }
        navigate("/dashbord/profile")
        // two 

     }catch(err){
        console.log(err);
     }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex justify-around mt-2">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className={`inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md ${
              processing
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-green-900 bg-green-100 hover:bg-green-200"
            }`}
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-4xl text-center text-red-600">{cardError}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
