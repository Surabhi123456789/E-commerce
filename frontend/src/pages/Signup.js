import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import summaryApi from '../common';
import { toast } from 'react-toastify';


const Signup = () => {

         
  const [showPassword, setShowPassword]=useState(false);
  const[showConfirmPassword, setShowConfirmPassword]= useState(false)

  const [data,setData] = useState({
          email:"",
          password:"",
          name:"",
          confirmPassword:""
  })
  const navigate = useNavigate()
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
  
   if(data.password === data.confirmPassword)
   {
       const dataResponse = await fetch(summaryApi.signUp.url,{
       method: summaryApi.signUp.method,
       headers : {
                "content-type"  : "application/json"
          },
        body: JSON.stringify(data)
       })
      const dataApi = await dataResponse.json()

       if(dataApi.success)
       {
        toast.success(dataApi.message)
        navigate("/login")
       }
       if(dataApi.error)
       {
         toast.error(dataApi.message)
       }
   }
   else
   {
      console.log("Please check the password and confirm the Password")
   }

}

  return (
    <section id='signup'>
           
    <div className='mx-auto container p-5  '>

          <div className='bg-white p-2 py-5 w-1/2 mx-auto shadow-lg '>
             <div className=' '>
                 <FaRegCircleUser className='w-8 h-8 mx-auto text-blue-500'/>
             </div>
             <form className='pt-18' onSubmit={handleSubmit}>
             <div className='grid'>
                     <label>Name: </label>
                    <div className='bg-slate-200 p-2 '>
                       <input
                        type='name' 
                        placeholder='enter your name'
                        name='name'
                        onChange={handleOnChange}
                        value={data.name}
                        required
                        className='w-full h-full bg-transparent' />
                    </div>
                 </div>

                 <div className='grid'>
                     <label>Email: </label>
                    <div className='bg-slate-200 p-2 '>
                       <input
                        type='email' 
                        placeholder='enter email'
                        name='email'
                        onChange={handleOnChange}
                        value={data.email}
                        required
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
                          onChange={handleOnChange}
                          value={data.password}
                          required
                          className='w-full h-full bg-transparent'/>

                         <div className='cursor-pointer' onClick={()=> setShowPassword((prev)=>!prev)}>
                              <span>
                                {
                                   showPassword ?  <FaEyeSlash/> :  <FaEye/>
                                }
                              </span>
                         </div>
                     </div>
                  
                 </div>
                 <div>
                     <label> Confirm Password: </label>
                     <div className='bg-slate-200 p-3 flex'>
                         <input 
                          type={showConfirmPassword ? "text" : "password" }
                          placeholder='enter Confirm password' 
                          name='confirmPassword'
                          onChange={handleOnChange}
                          value={data.confirmPassword}
                          required
                          className='w-full h-full bg-transparent'/>

                         <div className='cursor-pointer' onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
                              <span>
                                {
                                   showConfirmPassword ?  <FaEyeSlash/> :  <FaEye/>
                                }
                              </span>
                         </div>
                     </div>
                    
                 </div>


                 <div className='flex justify-center'>
                       <button className='bg-blue-500 hover:bg-blue-700 text-white w-40 rounded-full 
                         hover:scale-95 px-5 py-2 transition-all mx-auto block mt-5 '>Signup</button>
                 </div>
             

             </form>
            
             <p className='my-4 ' > Already have an account ?  <Link to={"/login"}  className='hover:text-blue-700 hover:underline'>Login</Link></p>

          </div>

    </div>
</section>
  )
}

export default Signup
