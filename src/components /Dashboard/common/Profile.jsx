import { useContext } from 'react'
// import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../../provider/AuthProvider'
import useRoll from '../../hooks/useRoll'

const Profile = () => {
  const { user,loading } = useContext(AuthContext)
  const [role,isLoading]=useRoll();
//   console.log(user)
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <Helmet>
        <title>Profile</title>
      </Helmet> */}
      <div className='w-3/5 bg-white shadow-lg rounded-2xl'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='object-cover w-24 h-24 mx-auto border-2 border-white rounded-full '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile