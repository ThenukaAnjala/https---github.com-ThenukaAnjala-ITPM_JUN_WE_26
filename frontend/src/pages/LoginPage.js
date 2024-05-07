import Login from '../components/Login';
import LoginPhoto from '../assets/LoginPhoto.jpg'

export default function LoginPage(){
    return(
        <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Login/>
      </div>
      <div className='hidden lg:flex h-full items-center justify-center bg-gray-200'>
        <div className='w-full h-full bg-gradient-to-tr'>
        <img src={LoginPhoto} alt='LoginPhoto' className='px-full py-full' />
        </div>
      </div>
    </div>
    )
}