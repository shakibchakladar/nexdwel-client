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
import CheckoutForm from "../form/CheckOutform";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
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
                    Room: {bookingInfo.title}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Location: {bookingInfo.location}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {/* Guest: {bookingInfo.guest.name} */}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500"></p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Price: $ {bookingInfo.price}
                  </p>
                </div>
                <hr className="mt-8 " />
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
                <div className="flex justify-around mt-2">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    Pay Now
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    No
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BookingModal.propTypes = {
  bookingInfo: PropTypes.object,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default BookingModal;
