import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Link , useParams } from 'react-router-dom';
import "./ResetPassword.scss";
const ResetPassword = () => {
  const {token} = useParams();

  const {register,handleSubmit,formState:{errors},reset} = useForm()

  const onSubmit = (data)=>{
    console.log('reset:',{token,...data});

    const isSuccess = true
    if(isSuccess){
      toast.success('password reset successfully!')
      reset();
    }
    else{
      toast.error('something went wrong')
    }
    
  }
return (
  <div className="mainResetContainer">
    <div className="resetformcontainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='instrcution'>
          Enter your password below.
        </p>
        <input 
        placeholder='Enter new password'
        {...register("password",{
          required:"password is required",
          minLength:{value:6,message:"Password must be at least 6 characters"}
        })}
        type="password" 
        />
        {errors.password && <span className="error">{errors.password.message}</span> }
        <input 
        type="password" 
        placeholder='Cofirm your password'
        {...register("confirmPassword",{
          required:"Confirm Password is required",
          validate:(value,formvalues)=>
            value === formvalues.password || "Password do not match"
        })}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span> }
            <button type="submit">Reset Password</button>
      </form>
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
  )
}

export default ResetPassword