import { useForm } from 'react-hook-form'
import { ToastContainer , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './Login.scss'
import { Link } from 'react-router-dom';
import { FaGoogle ,FaGithub , FaLinkedin } from 'react-icons/fa';
const Login = () => {
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  const onSubmit = (data) =>{
    const loginData = {
      email: data.email,
      password:data.password,
      last_login: new Date().toISOString(),
    }
    const isSuccess = true //Replace with api response
  if(isSuccess){
    toast.success('Login Successfull Welcome back.')
    reset();
  }
  else{
    toast.error('Login failed Try again.')
  }
  console.log('login data',loginData);
  
  }
  const handleSocialLogin = (provider)=>{
    toast.info(`Continue with ${provider} clicked!`)
  }
  return (
   <>
    <div className="mainLoginContainer">
      <div className='LoginFormContainer'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
          type="email"
          placeholder='Enter email'
          {...register("email",{required : true})}
           />
           {errors.email && (
            <span className='error'>Email is Required</span>
           )}
           <input 
           type="password" 
           placeholder='Enter Password'
           {...register("password",{required:true})}
           />
           {errors.email &&(
            <span className="error">Password is Required</span>
           )}
           <div className='mainContainerOfLoginReferal'>
            <Link to='/forgot-password' className='loginreferal'>Forgot Passowrd?</Link>
           </div>
           <button className='submit'>Login</button>
        </form>
        <p className='existing-user'>
          Don't have an account?{""}
          <Link to='/' className='loginreferal'>
          Sign Up
          </Link>
        </p>
      </div>
      <div className="loginButtonHolder">
        <div className="social-login-content">
          <p className='login-vertical-text'>You can also continue with them</p>
          <div className="icon-list">
              <FaGoogle onClick={() => handleSocialLogin("Google")} />
              <FaGithub onClick={() => handleSocialLogin("GitHub")} />
              <FaLinkedin onClick={() => handleSocialLogin("LinkedIn")} />
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

export default Login