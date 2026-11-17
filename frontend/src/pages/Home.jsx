import React from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className='min-h-[calc(100vh-80px)] flex justify-center items-center p-4'>
      <div className='w-full max-w-2xl'>
        <div className='bg-white rounded-2xl shadow-2xl p-8 md:p-12'>
          {/* Welcome Header */}
          <div className='text-center mb-8'>
            <div className='text-6xl mb-4'>👋</div>
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2'>
              Welcome, {user?.name}!
            </h1>
            <p className='text-gray-600 text-lg'>You're successfully authenticated</p>
          </div>

          {/* Profile Card */}
          <div className='bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-purple-100'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
              <span>📋</span> Your Profile
            </h2>
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-colors'>
                <span className='text-gray-600 font-semibold'>Full Name</span>
                <span className='text-gray-800 font-bold text-lg'>{user?.name}</span>
              </div>
              <div className='flex items-center justify-between p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-colors'>
                <span className='text-gray-600 font-semibold'>Email</span>
                <span className='text-gray-800 font-bold text-lg'>{user?.email}</span>
              </div>
              <div className='flex items-center justify-between p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-colors'>
                <span className='text-gray-600 font-semibold'>User ID</span>
                <span className='text-purple-600 font-bold text-lg font-mono'>#{user?.id}</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className='bg-gradient-to-r from-purple-100 to-indigo-100 border-l-4 border-purple-600 rounded-lg p-6 mb-8'>
            <div className='flex items-start gap-3'>
              <span className='text-2xl'>🔒</span>
              <div>
                <h3 className='font-bold text-gray-800 mb-2'>Secure Access</h3>
                <p className='text-gray-700'>This is a protected route that only authenticated users can access. Your session is secured with JWT tokens stored in HTTP-only cookies.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:border-green-400 transition-colors cursor-pointer'>
              <div className='text-3xl mb-2'>✅</div>
              <h3 className='font-bold text-gray-800 mb-1'>Secure Auth</h3>
              <p className='text-sm text-gray-600'>Password encrypted with bcrypt</p>
            </div>
            <div className='bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:border-blue-400 transition-colors cursor-pointer'>
              <div className='text-3xl mb-2'>🔑</div>
              <h3 className='font-bold text-gray-800 mb-1'>JWT Tokens</h3>
              <p className='text-sm text-gray-600'>Secure token-based auth</p>
            </div>
            <div className='bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200 hover:border-pink-400 transition-colors cursor-pointer'>
              <div className='text-3xl mb-2'>🛡️</div>
              <h3 className='font-bold text-gray-800 mb-1'>Protected Routes</h3>
              <p className='text-sm text-gray-600'>Only logged-in users allowed</p>
            </div>
            <div className='bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-400 transition-colors cursor-pointer'>
              <div className='text-3xl mb-2'>🚀</div>
              <h3 className='font-bold text-gray-800 mb-1'>Modern Stack</h3>
              <p className='text-sm text-gray-600'>React + Express + PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
