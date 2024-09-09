import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <header className='h-20 shadow-lg bg-white'>
               <div className='h-full container mx-auto flex items-center px-4 justify-between'>

                    <div className=''>
                         <Link to={"/"}>
                             <Logo w={150} h={100} />
                         </Link>
                    </div>
                    <div className='flex justify-between items-center w-[57vw] '>

                         <div className='hidden lg:flex  justify-center  border rounded-full shadow-md pl-9 mx-auto '>
                              <input type='text' placeholder='search product here......' 
                               className='w-full outline-none mr-10 '/>
                              <div className='h-7 w-[30px] items-center flex justify-center rounded-r-full cursor-pointer
                               text-lg pr-3 bg-blue-500 hover:bg-blue-700'>
                                   <GrSearch />
                              </div>
                         </div>
     
                         <div className=' flex items-center gap-7 ml-auto'>

                              <div className='text-3xl  cursor-pointer  '>
                                  <FaUser/> 
                              </div>  

                              <div className='text-3xl ml-auto cursor-pointer relative '>
                                 <span> <IoCart/></span>   

                                 <div className='bg-blue-500 text-white w-5 h-5 p-1 flex items-center
                                  rounded-full justify-center absolute -top-1 -right-2'>
                                       <p className='text-sm '>0</p>
                                 </div>
                              </div> 

                              <div>
                                   <Link className='bg-blue-500 px-3 text-white cursor-pointer rounded-full hover:bg-blue-700 py-1'>Login</Link>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header
