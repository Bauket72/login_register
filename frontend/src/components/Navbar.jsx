import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <nav className='bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 p-4 shadow-2xl sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-white font-bold text-2xl tracking-wide'>
          <Link to="/" className='hover:text-purple-200 transition-colors'>✨ AuthHub</Link>
        </div>

        <div className='flex gap-6 items-center'>
          {user ? (
            <>
              <div className='text-white flex items-center gap-2'>
                <div className='w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
                  <span className='text-lg'>👤</span>
                </div>
                <span className='text-sm sm:text-base'><strong>{user.name}</strong></span>
              </div>
              <button 
                onClick={handleLogout}
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className='text-white hover:text-purple-200 font-semibold transition-colors'>Login</Link>
              <Link to="/register" className='bg-white text-purple-700 hover:bg-purple-50 px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg'>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
