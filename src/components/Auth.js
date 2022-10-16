import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Auth() {
   
    let authenticate =localStorage.getItem('token')
    
  return (
    authenticate ? <Outlet></Outlet> :<Navigate to="/login"></Navigate>
  )
}
