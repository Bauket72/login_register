import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className='flex justify-center items-center min-h-screen'>Loading...</div>
  }

  return user ? element : <Navigate to="/login" />
}

export default PrivateRoute
