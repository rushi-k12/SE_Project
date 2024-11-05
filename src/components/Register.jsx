import React, { useState } from 'react'
import "../styles/Register.css"
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD

=======
>>>>>>> origin/main
export default function Register() {
  const[isLogin, setIsLogin]= useState(true);
  const [signinData,setInData]=useState({});
  const[iferror,setIferror]=useState(false);
  const[errmsg,setError]=useState("");
  const[signupData,setSignuP]=useState({});

  const navigate=useNavigate();

  const signinhandle=(e)=>{

    setInData({
        ...signinData,
        [e.target.id]:e.target.value
    })
    
    
}
const submitInhandle=async(e)=>{
  e.preventDefault();
  const response=await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
     body:JSON.stringify(signinData)
    
     
  })
  const result= await response.json();
  
  
  if(response.ok){
      console.log(result);
      navigate('/')
      
      }
      if(!response.ok){
          setIferror(true);
         console.log("error is::",result.message);
         setError(result.message);
         setTimeout(() => {
          setIferror(false);
         }, 3000);
       
      }
  
}
const signUphandle=(e)=>{
    setSignuP({
      ...signupData,
      [e.target.id]:e.target.value}
    )
    
}
const handleSignUpsubmit = async (e) => {
  e.preventDefault();

  // Check if password and confirm password match
  if (signupData.comformpassword === signupData.password) {
    try {
      // Proceed with the API request if passwords match
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();

      if (response.ok) {
        setInData({ email: '', password: '' }); // Reset signup form data
        setIsLogin(true);
         // Switch to login view after successful signup
      } else {
        setIferror(true); // Show error state
        console.log("Error is::", result.message);
        setError(result.message); // Set the error message
        setTimeout(() => {
          setIferror(false); // Hide the error after 3 seconds
        }, 3000);
      }
    } catch (error) {
      // Handle any network or fetch errors
      setIferror(true);
      setError("An unexpected error occurred. Please try again.");
      console.error("Fetch error:", error);
      setTimeout(() => {
        setIferror(false);
      }, 3000);
    }
  } else {
    // Set error if passwords do not match
    setError("Please check that the password and confirm password match!");
    setIferror(true);
    setTimeout(() => {
      setIferror(false); // Hide the error after 3 seconds
    }, 3000);
  }
};

    return (
    
<<<<<<< HEAD
    <div className='r-container'>
      <div className='out-container'>
      <div className={isLogin?'form-container move-right':'form-container move-left'}>
        <div className='form-toggle'>
          <button className={isLogin ? 'active ':""} onClick={()=>setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active':""}onClick={()=>setIsLogin(false)}>Signup</button>
=======
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active':""} onClick={()=>setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active':""}onClick={()=>setIsLogin(false)}>SignUP</button>
>>>>>>> origin/main
        </div>
        {isLogin ? <>
        <form className='form' onSubmit={submitInhandle}>
          <h2>Login Form</h2>
          <input type='email'id="email"value={signinData.email} placeholder='Email'onChange={signinhandle}></input>
          <input type='password'id="password" value={signinData.password} placeholder='password'onChange={signinhandle}></input>
          <a href='#'>Forgot Password?</a>
          <button type='submit'>Login</button>
<<<<<<< HEAD
          <p>Not a Member? <a href='#' onClick={()=>setIsLogin(false)}>Signup Now</a></p>
        </form>
        </>:<>
        <form className='form' onSubmit={handleSignUpsubmit}>
        <h2>Signup Form</h2>
          <input type='email'id="email"value={signupData.email} placeholder='Email'onChange={signUphandle}></input>
          <input type='password'id="password"  value={signupData.password}placeholder='password'onChange={signUphandle}></input>
          <input type='password'id='comformpassword'value={signupData.comformpassword} placeholder='confirm password'onChange={signUphandle}></input>
          <button type='submit'>Signup</button>
=======
          <p>Not a Member? <a href='#' onClick={()=>setIsLogin(false)}>SignUp Now</a></p>
        </form>
        </>:<>
        <form className='form' onSubmit={handleSignUpsubmit}>
        <h2>SignUp Form</h2>
          <input type='email'id="email"value={signupData.email} placeholder='Email'onChange={signUphandle}></input>
          <input type='password'id="password"  value={signupData.password}placeholder='password'onChange={signUphandle}></input>
          <input type='password'id='comformpassword'value={signupData.comformpassword} placeholder='confirm password'onChange={signUphandle}></input>
          <button type='submit'>SUBMIT</button>
>>>>>>> origin/main

        </form>
        </>}
        <div style={{color:"red"}}>
            {iferror?<p>{errmsg}</p>:null}
           </div>
      </div>
<<<<<<< HEAD
      <div className={isLogin?'login-img img-left ':'login-img img-right'}>
        {isLogin?<img src="/login.svg" alt="" />:<img src="Signup.svg" alt="" />}
      </div>
      </div>
=======
      
>>>>>>> origin/main
    </div>
  )
  }