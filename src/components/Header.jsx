import React, { useState } from 'react';
import imglogo from '../assets/S-PNG.png';
import { FaBars, FaFacebook, FaGithub, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full flex justify-between items-center scroll-my-10 bg-black  px-8 py-3 drop-shadow-lg text-white z-10'>
      <Link to='home' smooth={true} duration={500}>
        <div className='flex w-10'>
          <img src={imglogo} alt='Logo' />
          <p>attha Pikhunthod</p>
        </div>
      </Link>

      {/* menu list */}
      <div className='menu p-5'>
        <ul className='md:flex hidden font-bold  space-x-10 '>
          <li className='hover:text-green-300 duration-700 cursor-pointer'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:text-green-300 duration-700 cursor-pointer'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:text-green-300 duration-700 cursor-pointer'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='hover:text-green-300 duration-700 cursor-pointer'>
            <Link to='project' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className='hover:text-green-300 duration-700 cursor-pointer'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* berger menu */}
      <div onClick={handleClick} className='md:hidden z-10 text-2xl '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* menu sidebar */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute md:hidden top-[100%] left-0 w-full font-bold  h-[20rem]  text-center bg-gray-900 drop-shadow-xl sm:flex flex-col justify-center items-center text-xl space-y-10 '
        }
      >
        <li className='hover:text-green-300 duration-700'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-green-300 duration-700'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-green-300 duration-700'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-green-300 duration-700'>
          <Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='hover:text-green-300 duration-700'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* <div></div> */}

      {/* icon link */}
      <div className='flex fixed flex-col top-[70vh] md:top-[50vh] duration-500 left-0 '>
        <ul>
          <li className='w-[150px] h-[40px] flex justify-between mb-1 ml-[-110px] hover:ml-[-20px] rounded-full text-blue-600 bg-white hover:bg-blue-600 hover:text-white duration-700 '>
            <a
              className='flex justify-between items-center w-full ml-7'
              href='https://www.facebook.com/ZLeDGG'
              target='-blank'
            >
              Facebook
              <FaFacebook className='text-4xl' />
            </a>
          </li>
          <li className='w-[140px] h-[40px] flex justify-between ml-[-100px] hover:ml-[-20px] rounded-full text-black bg-white hover:bg-black hover:text-white duration-700  '>
            <a
              className='flex justify-between items-center w-full ml-7'
              href='https://github.com/SatthaPik'
              target='-blank'
            >
              Github
              <FaGithub className='text-4xl' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
