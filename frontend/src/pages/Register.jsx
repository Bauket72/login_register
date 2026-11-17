import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters")
      setLoading(false)
      return
    }

    const result = await register(form.name, form.email, form.password)
    
    if (result.success) {
      navigate("/")
    } else {
      setError(result.message)
    }
    setLoading(false)
  }

  return (
    <div className='min-h-[calc(100vh-80px)] flex justify-center items-center p-4'>
      <div className='w-full max-w-md'>
        <div className='bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm'>
          {/* Header */}
          <div className='text-center mb-8'>
            <div className='text-5xl mb-3'>✨</div>
            <h2 className='text-3xl font-bold text-gray-800'>Create Account</h2>
            <p className='text-gray-600 mt-2'>Join us today</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className='bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded'>
              <p className='text-red-700 font-semibold text-sm'>{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-10' 
                value={form.name} 
                onChange={(e)=> setForm({...form, name: e.target.value})} 
              />
            </div>
            
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-10' 
                value={form.email} 
                onChange={(e)=> setForm({...form, email: e.target.value})} 
              />
            </div>
            
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
              <input 
                type="password" 
                placeholder="Min 6 characters" 
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-10' 
                value={form.password} 
                onChange={(e)=> setForm({...form, password: e.target.value})} 
              />
              <p className='text-xs text-gray-500 mt-1'>Password must contain at least 6 characters</p>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-3 rounded-lg font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>Already registered?</span>
            </div>
          </div>

          {/* Login Link */}
          <p className='text-center text-gray-600'>
            <Link to="/login" className='text-purple-600 font-bold hover:text-purple-700 hover:underline'>Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
