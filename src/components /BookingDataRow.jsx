import PropTypes from 'prop-types'

const BookingDataRow = ({ booking }) => {
  return (
    <tr>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='relative block'>
              <img
                alt='profile'
                src={booking?.property_image}
                className='object-cover h-10 mx-auto rounded w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.property_title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='relative block'>
             
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {/* {booking?.guest?.name} */}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>${booking?.property_price}</p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(booking?.from), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(booking?.to), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 rounded-full opacity-50'
          ></span>
          <span className='relative'>Cancel</span>
        </span>
      </td>
    </tr>
  )
}

BookingDataRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default BookingDataRow