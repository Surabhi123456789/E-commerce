import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import summaryApi from '../common';
import { toast } from 'react-toastify';

const Login = () => {

  const [showPassword, setShowPassword]=useState(false);
  const [data,setData] = useState({
          email:"",
          password:""
  })

  const handleOnChange  = (e) =>{
          const {name , value }=e.target      
          setData((prev)=>{
               return{
                   ...prev,
                   [name] : value
               }
          })  
  }
  const handleSubmit =async(e)=>{
    // when we clicked on a login button page will be refreshed automatically 
    // to prevent this issue used this method 
    e.preventDefault()

    const dataResponse = await fetch(summaryApi.signIn.url,{
      method : summaryApi.signIn.method,
      headers : {
         "conetnt-type" : "application/json"
      },
      body : JSON.stringify(data)

    })
    const dataApi = await dataResponse.json()

    if(dataApi.success){
      toast.success(dataApi.message)
    }

    if(dataApi.error)
    {
      toast.error(dataApi.message)
    }

  }
  console.log("data login",data)
  
  return (
  
       <section id='login'>
           
              <div className='mx-auto container p-5  '>

                    <div className='bg-white p-2 py-5 w-1/2 mx-auto shadow-lg '>
                       <div className=' '>
                           <FaRegCircleUser className='w-8 h-8 mx-auto text-blue-500'/>
                       </div>
                       <form className='pt-18' onSubmit={handleSubmit}>
                           <div className=''>
                               <label>Email: </label>
                              <div className='bg-slate-200 p-2 '>
                                 <input
                                  type='email' 
                                  placeholder='enter email'
                                  name='email'
                                  value={data.email}
                                  onChange={handleOnChange}
                          
                                  className='w-full h-full bg-transparent' />
                              </div>
                           </div>
                           <div>
                               <label>Password: </label>
                               <div className='bg-slate-200 p-3 flex'>
                                   <input 
                                    type={showPassword ? "text" : "password" }
                                    placeholder='enter password' 
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    
                                    className='w-full h-full bg-transparent'/>

                                   <div className='cursor-pointer' onClick={()=> setShowPassword((prev)=>!prev)}>
                                        <span>
                                          {
                                             showPassword ?  <FaEyeSlash/> :  <FaEye/>
                                          }
                                        </span>
                                   </div>
                               </div>
                               <Link to={'/forgot password'} className='block w-fit ml-auto hover:text-blue-500 hover:underline'>
                                     Forgot Password
                               </Link>
                           </div>
                           <div className='flex justify-center'>
                                 <button className='bg-blue-500 hover:bg-blue-700 text-white w-40 rounded-full 
                                   hover:scale-95 px-5 py-2 transition-all mx-auto block mt-5 '>Login</button>
                           </div>
                       

                       </form>
                      
                       <p className='my-4 ' > Don't have an account ?  <Link to={"/sign-up"}  className='hover:text-blue-700 hover:underline'>Sign up</Link></p>

                    </div>

              </div>
       </section>
  )
}

export default Login
