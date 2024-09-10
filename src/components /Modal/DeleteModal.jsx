import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/react'
  import { Fragment } from 'react'
  import PropTypes from 'prop-types'
  const DeleteModal = ({ closeModal, isOpen,handleDelete,id}) => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Are you sure?
                  </DialogTitle>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      You cannot undo once it&apos;s done!
                    </p>
                  </div>
                  <hr className='mt-8 ' />
                  <div className='flex justify-around mt-2'>
                    <button onClick={()=>{handleDelete(id); closeModal()}}
                      type='button'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    >
                      Yes
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
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
    )
  }
  
  DeleteModal.propTypes = {
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
  }
  
  export default DeleteModal