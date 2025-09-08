import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.scss";
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState : {errors},
    reset,
  } = useForm()

  const onSubmit = (data)=>{
    const user_id = nanoid();
    const userData = {
      user_id,
      full_name: data.full_name,
      email: data.email,
      password: data.password,
      profile_pic_url: data.profile_pic_url || "",
      created_date: new Date().toISOString(),
      last_date:new Date().toISOString()
    }

    const isSuccess = true; // Replace with  API response

    if (isSuccess) {
      toast.success("Sign up successful! Welcome.");
      reset(); 
    } else {
      toast.error("Sign up failed! Try again.");
    }

    console.log("User Signup Data:", userData);
  }
  const handleSocialLogin = (provider)=>{
    toast.info(`Continue with ${provider} clicked!`)
  }
  return (
    <>
    <div className='mainSignUpContainer'>
      <div className='formContainer'>
      {/* <h2>Lets goooo</h2> */}
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input 
      type="text" 
      placeholder='full name'
      {...register("full_name",{required:true})}
      />
      {errors.full_name && <span className='error'>Name is Required!</span>}
      <input 
      type="email"
      placeholder='Enter email'
      {...register("email",{required:true})}
      />
      {errors.email && <span className='error'>Email is Required</span>}
      <input 
      type="password"
      placeholder='Enter password'
      {...register("password",{required:true})} 
      />
      {errors.password && <span className='error'>Password must be at least 6 chars</span>}
      <input 
      type="text" 
      placeholder='Profile URL (optional)'
      {...register("profile_pic_url")}
      />
      <button type='submit'>Sign Up</button>
    </form>

    <p className="existing-user">
  Already a user?<Link to="/login" className='loginReferal'>Click here</Link>
</p>
</div>
<div className='buttonHolder'>
  <div className="social-login">
    <p className="vertical-text">You can also continue with them</p>
    <div className="icon-list">
      <FaGoogle onClick={() => handleSocialLogin('Google')} />
      <FaGithub onClick={() => handleSocialLogin('GitHub')} />
      <FaLinkedin onClick={() => handleSocialLogin('LinkedIn')} />
    </div>
  </div>
</div>
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
    </>
  )
}

export default SignUp