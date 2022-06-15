import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({user, children}) {
  return (
    <div>
        {
            user ? children : <Navigate to="/" replace/>
        }
    </div>
  )
}
