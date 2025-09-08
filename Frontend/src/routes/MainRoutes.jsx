import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'
import ForgotPassword from '../pages/Forgotpassword/ForgotPassword'
import ResetPassword from '../pages/Resetpassword/ResetPassword'
const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes