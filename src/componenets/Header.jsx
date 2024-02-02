import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
    const navigate=useNavigate();
  return (
    <nav>
    <div className=' py-2 md:mx-52 mx-8 flex justify-between  items-center '>
        <div className='h-fit w-fit hover:cursor-pointer' onClick={()=>{navigate('/');}} ><img alt='logo' src='https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/company-logo/logo.svg' /></div>
        <div className='flex gap-x-6 items-center'>
            <ul className='flex gap-x-6 items-center'>
                <li>
                    <Link to={"/"} className='text-light-gray hidden md:block font-semibold hover:text-brand-blue'>About Us</Link>
                </li>
                <li>
                    <Link to={"/"} className='text-light-gray hidden md:block font-semibold hover:text-brand-blue'>Testimonials</Link>
                </li>
                <li><button className='border-[1px] border-brand-blue mr-2 bg-brand-blue py-2 px-6 rounded font-bold text-white ' onClick={()=>{navigate('/taskConsole');}}>Go to Console</button></li>
            </ul>
          
        </div>
        
    </div>
</nav>
  )
}

export default Header