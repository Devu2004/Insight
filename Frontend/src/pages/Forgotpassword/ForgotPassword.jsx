import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
import "./ForgotPassword.scss";
import { FaGoogle ,FaGithub , FaLinkedin } from 'react-icons/fa';
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset,
  } = useForm()
  const onSubmit = (data) =>{
    console.log('forgot pass request from mail',data.email);
    const isSuccess = true;
    if(isSuccess){
      toast.success("Password link sent to your email")
      reset();
    }
    else{
      toast.error("Email not found try again.")
    }
    
  }
  return (
<div className="mainForgotContainer">
  <div className="forgotFormContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="instruction">
            Enter your registered email to receive a password reset link.
          </p>
      <input 
      type="email" 
      placeholder='Enter your email'
      {...register("email",{required:true , pattern:{
        value: /^\S+@\S+$/i,
    message: "Invalid email format"

      }})}
      />
      {errors.email &&  <span className="error">Email is required</span> }
      <button type='submit'>Send reset link</button>
    </form>
  </div>
            <p className="existing-user">
          Back to{""}
          <Link to="/login" className="loginReferal">
            Login
          </Link>
        </p>
<ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
</div>
  )
}

export default ForgotPassword