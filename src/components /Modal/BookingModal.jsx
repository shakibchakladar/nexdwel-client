import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../form/checkout/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
  // Ensure `price` is a number
  const price = Number(bookingInfo?.price) || 0;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-center text-gray-900"
                >
                  Review Info Before Payment
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Room: {bookingInfo?.title || "N/A"}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Location: {bookingInfo?.location || "N/A"}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Guest: {bookingInfo?.guest?.name || "N/A"}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Price: ${price}</p>
                </div>
                <hr className="mt-8" />
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    closeModal={closeModal}
                    bookingInfo={{ ...bookingInfo, price }}
                  />
                </Elements>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BookingModal.propTypes = {
  bookingInfo: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    guest: PropTypes.shape({
      name: PropTypes.string,
    }),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default BookingModal;




// import PropTypes from "prop-types";
// import {
//   Dialog,
//   Transition,
//   TransitionChild,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { Fragment } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../form/checkout/CheckoutForm";
// // import CheckOutform from "../form/CheckOutform";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={closeModal}>
//         <TransitionChild
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </TransitionChild>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-full p-4 text-center">
//             <TransitionChild
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <DialogPanel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <DialogTitle
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-center text-gray-900"
//                 >
//                   Review Info Before Payment
//                 </DialogTitle>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Room: {bookingInfo?.title || "N/A"}
//                   </p>
//                 </div>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Location: {bookingInfo?.location || "N/A"}
//                   </p>
//                 </div>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Guest: {bookingInfo?.guest?.name || "N/A"}
//                   </p>
//                 </div>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Price: ${bookingInfo?.price || 0}
//                   </p>
//                 </div>
//                 <hr className="mt-8" />
//                 <Elements stripe={stripePromise}>
//                   <CheckoutForm closeModal={closeModal} bookingInfo={bookingInfo} />
//                 </Elements>
//               </DialogPanel>
//             </TransitionChild>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// BookingModal.propTypes = {
//   bookingInfo: PropTypes.shape({
//     title: PropTypes.string,
//     location: PropTypes.string,
//     guest: PropTypes.shape({
//       name: PropTypes.string,
//     }),
//     price: PropTypes.number,
//   }),
//   closeModal: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
// };

// export default BookingModal;
