import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
    <div className=' py-2 md:mx-52 flex justify-between  items-center '>
        <div className='h-fit w-fit' ><img alt='logo' src='https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/company-logo/logo.svg' /></div>
        <div className='flex gap-x-6 items-center'>
            <ul className='flex gap-x-6 items-center'>
                <li>
                    <Link to={"/"} className='text-light-gray font-semibold hover:text-brand-blue'>About Us</Link>
                </li>
                <li>
                    <Link to={"/"} className='text-light-gray font-semibold hover:text-brand-blue'>Testimonials</Link>
                </li>
                <li><button className='border-[1px] border-brand-blue py-2 px-6 rounded font-bold text-brand-blue '>Sign In</button></li>
                <li><button className='border-[1px] border-brand-blue bg-brand-blue py-2 px-6 rounded font-bold text-white '>Get Loan Offer</button></li>
            </ul>
          
        </div>
        
    </div>
</nav>
  )
}

export default Header