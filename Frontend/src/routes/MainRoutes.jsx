import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Forgotpassword/ForgotPassword";
import ResetPassword from "../pages/Resetpassword/ResetPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import ResumeTemplate from "../pages/ResumeTemplate/ResumeTemplate";

const MainRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/resume-templates" element={<ResumeTemplate/>}/>

      </Routes>
    </>
  );
};

export default MainRoutes;
